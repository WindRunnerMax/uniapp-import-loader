import parseImports from "parse-imports";

const transformName = (str: string): string => str.replace(/\B([A-Z])/g, "-$1").toLowerCase();
const buildImportStatement = (itemModules: string, itemFrom: string): string =>
    `import ${itemModules} from "${itemFrom}";\n`;

export const transform = (
    source: string,
    options: { name: string; path: string; main: string }
): Promise<string> => {
    return new Promise<string>(resolve => {
        parseImports(source)
            .then(allImports => {
                let segmentStart = 0;
                let segmentEnd = 0;
                const target: Array<string> = [];
                for (const item of allImports) {
                    console.log(item);
                    if (item.isDynamicImport) return void 0;
                    if (!item.importClause.default || item.importClause.default !== options.name) {
                        return void 0;
                    }
                    segmentEnd = item.startIndex;
                    target.push(source.slice(segmentStart, segmentEnd));
                    if (item.importClause && item.moduleSpecifier.value) {
                        const parsedImports = [];
                        if (item.importClause.default) {
                            parsedImports.push(
                                buildImportStatement(
                                    item.importClause.default,
                                    item.moduleSpecifier.value
                                )
                            );
                        }
                        item.importClause.named.forEach(v => {
                            buildImportStatement(
                                v.binding === v.specifier
                                    ? v.binding
                                    : `${v.specifier} as ${v.binding}`,
                                `${options.name}/${options.path}/${transformName(v.binding)}/${
                                    options.main || transformName(v.binding)
                                }`
                            );
                        });
                        target.push(parsedImports.join(""));
                    }
                    segmentStart = item.endIndex;
                }
                resolve(target.join(""));
            })
            .catch((err: Error) => {
                console.error("uniapp-import-loader parse error", err);
                resolve(source);
            });
        return resolve(source);
    });
};

import parseImports from "parse-imports";

const transformName = (str: string): string => str.replace(/\B([A-Z])/g, "-$1").toLowerCase();
const buildImportStatement = (itemModules: string, itemFrom: string): string =>
    `import ${itemModules} from "${itemFrom}";\n`;

export const transform = (
    source: string,
    options: { name: string; path: string; main?: string }
): Promise<string> => {
    return parseImports(source)
        .then(allImports => {
            let segmentStart = 0;
            let segmentEnd = 0;
            const target: Array<string> = [];
            for (const item of allImports) {
                if (item.isDynamicImport) continue;
                if (!item.moduleSpecifier.value || item.moduleSpecifier.value !== options.name) {
                    continue;
                }
                segmentEnd = item.startIndex;
                target.push(source.slice(segmentStart, segmentEnd));
                if (item.importClause && item.moduleSpecifier.value) {
                    const parsedImports: Array<string> = [];
                    if (item.importClause.default) {
                        parsedImports.push(
                            buildImportStatement(
                                item.importClause.default,
                                item.moduleSpecifier.value
                            )
                        );
                    }
                    item.importClause.named.forEach(v => {
                        parsedImports.push(
                            buildImportStatement(
                                v.specifier, // as 会被舍弃 `${v.specifier} as ${v.binding}`,
                                `${options.name}/${options.path}/${transformName(v.specifier)}/${
                                    options.main || transformName(v.specifier)
                                }`
                            )
                        );
                    });
                    target.push(parsedImports.join(""));
                }
                segmentStart = item.endIndex;
            }
            target.push(source.slice(segmentStart, source.length));
            return target.join("");
        })
        .catch((err: Error) => {
            console.error("uniapp-import-loader parse error", err);
            return source;
        });
};

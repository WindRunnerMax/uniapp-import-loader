import parseImports from "parse-imports";

type customPathFn = (name: string) => string;

export const transformName = (str: string): string =>
    str.replace(/\B([A-Z])/g, "-$1").toLowerCase();

const buildImportStatement = (itemModules: string, itemFrom: string): string =>
    `import ${itemModules} from "${itemFrom}";\n`;

export const transform = (
    source: string,
    options: { name: string; path: string | customPathFn; main?: string }
): Promise<string> => {
    const segmentStartResult = /<script[\s\S]*?>/.exec(source);
    const scriptEndResult = /<\/script>/.exec(source);
    if (!segmentStartResult || !scriptEndResult) return Promise.resolve(source);
    const startIndex = segmentStartResult.index + segmentStartResult[0].length;
    const endIndex = scriptEndResult.index;
    const preSegment = source.slice(0, startIndex);
    const middleSegment = source.slice(startIndex, endIndex);
    const endSegment = source.slice(endIndex, source.length);
    return parseImports(middleSegment)
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
                target.push(middleSegment.slice(segmentStart, segmentEnd));
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
                                v.binding, // as 会被舍弃 `${v.specifier} as ${v.binding}`,
                                typeof options.path === "function"
                                    ? options.path(v.specifier)
                                    : `${options.name}/${options.path}/${transformName(
                                          v.specifier
                                      )}/${options.main || transformName(v.specifier)}`
                            )
                        );
                    });
                    target.push(parsedImports.join(""));
                }
                segmentStart = item.endIndex;
            }
            target.push(middleSegment.slice(segmentStart, middleSegment.length));
            return preSegment + target.join("") + endSegment;
        })
        .catch((err: Error) => {
            console.error("uniapp-import-loader parse error", err);
            return source;
        });
};

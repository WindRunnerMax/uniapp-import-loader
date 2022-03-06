const transformName = str => str.replace(/\B([A-Z])/g, "-$1").toLowerCase();

module.exports = function ({ types: t }) {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                const { node } = path;
                if (!node) return;

                const {
                    source: { value: libName },
                } = node;

                const { libraryName, libraryPath = "lib" } = state.opts;

                if (
                    !libraryName ||
                    typeof libraryName !== "string" ||
                    typeof libraryPath !== "string"
                ) {
                    throw new Error("name should be provided [string]");
                }

                const ids = {};
                const imports = [];
                // 对specifiers进行遍历，处理对应节点
                if (libName === libraryName) {
                    node.specifiers.forEach(item => {
                        if (t.isImportSpecifier(item)) {
                            const {
                                local: { name: localName = undefined },
                                imported: { name: importedName = undefined },
                            } = item;

                            if (!localName || !importedName) {
                                throw path.buildCodeFrameError(
                                    "An error occurred in parsing the abstract syntax tree"
                                );
                            }
                            // 如果当前绑定的引用数量为0，就进行丢弃
                            if (path.scope.getBinding(localName).references === 0) return;
                            // 防止变量名在其他作用域中冲突，遂利用generateUid产生一个唯一绑定
                            const id = path.scope.generateUid(`_${localName}`);
                            ids[localName] = id;

                            const transformedImportName = transformName(importedName);
                            imports.push(
                                t.importDeclaration(
                                    [t.importDefaultSpecifier(t.identifier(id))],
                                    t.StringLiteral(
                                        `${libraryName}/${libraryPath}/${transformedImportName}/${transformedImportName}`
                                    )
                                )
                            );
                            // 查找对目标绑定的所有引用并替换它们
                            const currentBinding = path.scope.getBinding(localName);
                            currentBinding.referencePaths.forEach(scopePath => {
                                const { type } = scopePath;
                                if (type === "JSXIdentifier") {
                                    scopePath.replaceWith(t.jSXIdentifier(id));
                                } else {
                                    scopePath.replaceWith(t.identifier(id));
                                }
                            });
                        }
                    });
                    // console.log(JSON.stringify(imports));
                    path.replaceWithMultiple(imports);
                }
            },
        },
    };
};

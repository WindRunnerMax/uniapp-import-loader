declare type customPathFn = (name: string) => string;
export declare const transformName: (str: string) => string;
export declare const transform: (source: string, options: {
    name: string;
    path: string | customPathFn;
    main?: string;
}) => Promise<string>;
export {};

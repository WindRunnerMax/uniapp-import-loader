import { transform } from "../dist/index";

describe("Test", () => {
    it("example", () => {
        return transform(
            `
        import a from 'b'
        import * as c from './d'
        import { e as f, g as h, i } from 'j'
        import k, { l as m } from 'n'
        import o, * as p from "./q"
        import r, { s as t, u } from "/v"
        import fs from 'fs'
      
        ;(async () => {
          await import("w")
          await import("x" + "y")
        })()
      `,
            {
                name: "j",
                path: "src/components",
                main: "index",
            }
        ).then(res => {
            console.log(res);
            expect(1 + 1).toBe(2);
        });
    });
});

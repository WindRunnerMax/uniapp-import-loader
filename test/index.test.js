import { transform } from "../dist/index";

describe("Test", () => {
    it("example", () => {
        return transform(
            `
        import a from "b";
        import * as c from "./d";
        import { e as f, g as h, i } from "j";
        import d, { 
            CCard as Layout,
            CCalendar,
        } from "shst-campus";
        import k, { l as m } from "n";
        import o, * as p from "./q";
        import r, { s as t, u } from "/v";
        import fs from "fs";

        ;(async () => {
          await import("component");
          await import("component" + "/s1");
        })();`,
            {
                name: "shst-campus",
                path: "lib",
            }
        ).then(res => {
            expect(res).toBe(`
        import a from "b";
        import * as c from "./d";
        import { e as f, g as h, i } from "j";
        import d from "shst-campus";
import Layout from "shst-campus/lib/c-card/c-card";
import CCalendar from "shst-campus/lib/c-calendar/c-calendar";
;
        import k, { l as m } from "n";
        import o, * as p from "./q";
        import r, { s as t, u } from "/v";
        import fs from "fs";

        ;(async () => {
          await import("component");
          await import("component" + "/s1");
        })();`);
        });
    });
});

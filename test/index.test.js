import { transform, transformName } from "../dist/index";

const TestHtml = `
<template>
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script lang="ts">
    import a from "b";
    import * as c from "./d";
    import { e as f, g as h, i } from "j";
    import d, {
        CCard,
        CCalendar,
    } from "shst-campus";
    import k, { l as m } from "n";
    import o, * as p from "./q";
    import r, { s as t, u } from "/v";
    import fs from "fs";
    ;(async () => {
        await import("component");
        await import("component" + "/s1");
    })();
</script>
<style>
    .c{
        display: block;
    }
</style>
`;

const OutHtml = `
<template>
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script lang="ts">
    import a from "b";
    import * as c from "./d";
    import { e as f, g as h, i } from "j";
    import d from "shst-campus";
import CCard from "shst-campus/lib/c-card/c-card";
import CCalendar from "shst-campus/lib/c-calendar/c-calendar";
;
    import k, { l as m } from "n";
    import o, * as p from "./q";
    import r, { s as t, u } from "/v";
    import fs from "fs";
    ;(async () => {
        await import("component");
        await import("component" + "/s1");
    })();
</script>
<style>
    .c{
        display: block;
    }
</style>
`;

describe("Test", () => {
    it("example", () => {
        return transform(TestHtml, {
            name: "shst-campus",
            path: "lib",
        }).then(res => {
            expect(res).toBe(OutHtml);
        });
    });
    it("custom path", () => {
        return transform(TestHtml, {
            name: "shst-campus",
            path: name => {
                return `shst-campus/lib/${transformName(name)}/${transformName(name)}`;
            },
        }).then(res => {
            expect(res).toBe(OutHtml);
        });
    });
});

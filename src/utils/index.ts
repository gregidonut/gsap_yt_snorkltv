import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type Lesson = {
    path: string;
    title: string;
    slug: string;
    url: string;
    LessonComponent: AstroComponentFactory;
};

export const modules = new Set<string>([]);
export function getLessons(): Lesson[] {
    const lessonModules = import.meta.glob("@/lessons/**/index.astro", {
        eager: true,
    });

    return Object.entries(lessonModules).map(function ([path, mod]): Lesson {
        const pathAncestry = path.split("/");
        const s = pathAncestry[pathAncestry.length - 2]!.split("-");

        const component = (mod as { default: AstroComponentFactory }).default;

        const t: string =
            s[s.length - 1]!.split("")
                .map(function (c: string, i: number) {
                    if (i === 0) {
                        return c.toUpperCase();
                    }
                    if (c !== c.toLowerCase()) {
                        return ` ${c.toLowerCase()}`;
                    }
                    return c;
                })
                .join("") + ".";

        return {
            path,
            url: `/lessons/${s[s.length - 1]}`,
            title: t,
            slug: s[s.length - 1]!,
            LessonComponent: component,
        };
    });
}

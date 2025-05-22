import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LessonComponent(): React.JSX.Element {
    const amountOfObjects = 9;
    const container = useRef(null);
    useGSAP(
        function () {
            const t1 = gsap.timeline();
            for (let i = 0; i <= amountOfObjects - 1; i++) {
                if (i < 3) {
                    t1.to(`#sword-${i}`, { y: 150 });
                    continue;
                }
                if (i === 3) {
                    t1.to(`#sword-${i}`, { y: 150 }, "+=2");
                    continue;
                }
                if (i === 4) {
                    t1.to(`#sword-${i}`, { y: 150 }, "<");
                    continue;
                }
                if (i < 7) {
                    t1.to(`#sword-${i}`, { y: 150 }, 8);
                    continue;
                }
                t1.to(`#sword-${i}`, { y: 150 }, 2);
            }
            const t2 = gsap.timeline();
            for (let i = 0; i <= amountOfObjects - 1; i++) {
                if (i % 2 === 0) {
                    t2.to(
                        `#yaSword-${i}`,
                        {
                            y: 150,
                            scale: 1.3,
                            repeat: -1,
                            yoyo: true,
                            ease: "linear",
                            duration: 0.3,
                        },
                        1,
                    );
                    continue;
                }
                t2.from(
                    `#yaSword-${i}`,
                    {
                        y: 150,
                        scale: 1.3,
                        repeat: -1,
                        yoyo: true,
                        ease: "linear",
                        duration: 0.3,
                    },
                    1,
                );
            }

            const t3 = gsap.timeline();
            t3.to("special", { scale: 1.2, duration: 0.05 });
        },
        { scope: container },
    );

    return (
        <section ref={container}>
            {Array.from(Array(amountOfObjects)).map(function (_, i: number) {
                return (
                    <img
                        id={`sword-${i}`}
                        key={i}
                        src="/sword.svg"
                        alt={`sword-${i}`}
                        height={70}
                    />
                );
            })}
            {Array.from(Array(amountOfObjects)).map(function (_, i: number) {
                return <br key={i} />;
            })}
            {Array.from(Array(amountOfObjects)).map(function (_, i: number) {
                return (
                    <img
                        id={`yaSword-${i}`}
                        key={i}
                        src="/sword.svg"
                        alt={`yaSword-${i}`}
                        height={70}
                    />
                );
            })}
        </section>
    );
}

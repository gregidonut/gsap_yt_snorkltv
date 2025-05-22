import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LessonComponent(): React.JSX.Element {
    const container = useRef(null);
    useGSAP(
        function () {
            gsap.to("section > img", {
                y: 100,
                stagger: {
                    amount: 0.2,
                    ease: "bounce",
                    from: "center",
                },
                repeat: -1,
                yoyo: true,
            });
        },
        { scope: container },
    );

    return (
        <section ref={container}>
            {Array.from(Array(9)).map(function (_, i: number) {
                return (
                    <img
                        key={i}
                        src="/sword.svg"
                        alt={`sword-${i}`}
                        height={70}
                    />
                );
            })}
        </section>
    );
}

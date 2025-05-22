import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LessonComponent(): React.JSX.Element {
    const container = useRef(null);
    useGSAP(
        function () {
            gsap.from("img", {
                y: -350,
                duration: 3,
                rotation: 360,
                ease: "bounce",
            });
        },
        { scope: container },
    );

    return (
        <section ref={container}>
            <img src="/ball.svg" alt="ball" height={75} />
        </section>
    );
}

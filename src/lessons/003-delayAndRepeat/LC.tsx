import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LessonComponent(): React.JSX.Element {
    const container = useRef(null);
    useGSAP(
        function () {
            gsap.to("img", {
                x: 400,
                y: 350,
                scale: 3,
                duration: 3,
                repeat: 2,
                yoyo: true,
                delay: 1,
            });
        },
        { scope: container },
    );

    return (
        <section ref={container}>
            <img src="/sword.svg" alt="sword" height={75} />
        </section>
    );
}

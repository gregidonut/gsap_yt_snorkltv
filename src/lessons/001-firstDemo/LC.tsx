import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LessonComponent(): React.JSX.Element {
    const container = useRef(null);
    useGSAP(
        function () {
            gsap.to("h2", { x: 400 });
        },
        { scope: container },
    );

    return (
        <section ref={container}>
            <h2>ulol</h2>
        </section>
    );
}

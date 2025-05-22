import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./section.module.css";

gsap.registerPlugin(useGSAP);

type NavButton = {
    name: string;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};
export default function LessonComponent(): React.JSX.Element {
    const container = useRef(null);
    let tween: gsap.core.Tween;
    useGSAP(
        function () {
            tween = gsap.to("img", {
                x: 400,
                y: 350,
                scale: 3,
                duration: 3,
                rotation: 360,
                paused: true,
            });
        },
        { scope: container },
    );

    const navButtons: NavButton[] = [
        {
            name: "play",
            clickHandler: function () {
                tween.play();
            },
        },
        {
            name: "pause",
            clickHandler: function () {
                tween.pause();
            },
        },
        {
            name: "reverse",
            clickHandler: function () {
                tween.reverse();
            },
        },
        {
            name: "restart",
            clickHandler: function () {
                tween.restart();
            },
        },
    ];

    return (
        <section ref={container} className={styles.section}>
            <nav>
                <ul>
                    {navButtons.map(function (b: NavButton, i: number) {
                        return (
                            <li key={i}>
                                <button onClick={b.clickHandler}>
                                    {b.name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <img src="/sword.svg" alt="sword" height={75} />
        </section>
    );
}

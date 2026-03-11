import { cloneElement } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AnimateOnScroll({
    children,
    animation = "fade-in-up",
    delay = 0,
    duration = 1,
    once = true,
}) {
    const [ref, isVisible] = useScrollAnimation({ once });

    const styles = {
        "--animation-delay": `${delay}s`,
        "--animation-duration": `${duration}s`,
    };

    return cloneElement(children, {
        ref,
        style: {
            ...children.props.style,
            ...styles
        },
        className: `
            ${children.props.className || ""}
            animated
            ${isVisible ? animation : "opacity-0"}
    `,
    });
}
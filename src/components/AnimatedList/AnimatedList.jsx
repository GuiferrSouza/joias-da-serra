import "./AnimatedList.css";

export default function AnimatedList({
    items = [],
    step = 2,
    animated = true,
    allFocused = false,
}) {
    const classes = [
        "animated-list",
        animated && !allFocused ? "animated-list--animated" : "",
        allFocused ? "animated-list--all-focused" : "",
    ].filter(Boolean).join(" ");

    return (
        <ul
            className={classes}
            style={{
                "--step": `${step}s`,
                "--items": items.length,
            }}
        >
            {items.map((item, i) => (
                <li key={i} style={{ "--i": i }}>
                    <span className="feature-dot" />
                    <span className="feature-text">{item}</span>
                </li>
            ))}
        </ul>
    );
}
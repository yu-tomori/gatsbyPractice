import React from "react"

export default function Header(props) {
    // return <h1>This is a header.</h1>
    return <h1>{props.headerText}</h1>
}

// What are "props"?
// To make UI components reusable pieces by dynamic you need to be able to supply them with different data.
// you do that with called "props".
// Props are properties supplied to React components.

// In JSX, you can embed any JavaScript expression by wrapping it with {}. This is how you can access the headerText from the props object.

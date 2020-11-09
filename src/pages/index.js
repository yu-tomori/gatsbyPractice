import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

// This code creates a component that contains a single div and some text appropriately.
// When you're running dev server, the Gatsby site files are being watched in the background.
export default function Home() {
  // "HTML-in-JS" is a syntax extension of JavaScript, for React called JSX.
  // Gatsby sites come with tooling already set up to convert your source code into
  // something that browsers can interpret.
  return (
    <Layout>
      <h1>Hi! I am building a fake Gatsby site as a part of a tutorial</h1>
      <p>
        What do I link to do? Lots of courcse but definitely enjoy building websites.
      </p>
    </Layout>

    // <div style={{ color: `purple` }}>
    //   <Link to="/contact/">Contact</Link>
    //   <Header headerText="Hello Gatsby!" />
    //   <p>What a world.</p>
    //   <img src="https://source.unsplash.com/random/400x200" alt="" />
    // </div>
  );
}

// That exactly is a "component"?
// A component is a building block for your site; It is a self-contained piece of code
// that describes a section of UI.
// Gatsby is build on React. When we talk about using and defining components,
// We are really talking about React Components.
// Now, your CSS, HTML, and JavaScript are tightly coupled and often living
// within the same file.

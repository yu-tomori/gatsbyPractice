import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Layout from "../components/layout"

// src-pages----about-css-modules-module---avatar---~~~. This is the class names CSS Modules generates.
// They're guaranteed to be unique across your site.
console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function AboutContainer() {
    return (
        <Layout>
            <Container>
                <h1>About CSS Modules</h1>
                <p>CSS Modules are coll</p>
                <User
                    username="Yu Tomori"
                    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                    excerpt="I'm Yu Tomori. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <User 
                    username="Bob Smith"
                    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                    excerpt="I'm Bob Smith, a vertically aligned type of guy."
                />
            </Container>
        </Layout>
    )
}

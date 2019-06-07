// libraries
import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import { useSpring, useTransition, animated } from "react-spring"
// components
import Container from "./containers/CenterContainer"
import Github from './icons/Github';
import Twitter from './icons/Twitter';

const Name = () => {
    // components need static query instead of exporting method like Pages
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        links
                    }
                }
            }
        `
    )

    const items = [<Github />, <Twitter />]

    const fadein = useSpring({
        config: { duration: 500 },
        opacity: 1,
        from: { opacity: 0 },
    })

    const transitions = useTransition(items, item => item.key, {
        from: { transform: "translate3d(0,-40px,0)" },
        enter: { transform: "translate3d(0,0px,0)" },
        leave: { transform: "translate3d(0,-40px,0)" },
    })

    return (
        <Container>
            <animated.h1 style={fadein}>
                {data.site.siteMetadata.title}
            </animated.h1>

            <div style={{ display: "flex" }}>
                {transitions.map(({(item, props, key)}) =>
                <animated.div key={key} style={props}>
                    {item.text}
                </animated.div>
                )}
            </div>
        </Container>
    )
}

export default Name

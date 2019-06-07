// libraries
import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import { useSpring, useTransition, animated } from "react-spring"
// components
import NameContainer from "./containers/NameContainer"
import Github from "./icons/Github"
import Twitter from "./icons/Twitter"

const Name = () => {
    // components need static query instead of exporting method like Pages
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    
    const fadein = useSpring({
        config: { duration: 500 },
        opacity: 1,
        from: { opacity: 0 },
    });

    return (
        <NameContainer>
            <animated.h1 style={fadein}>
                {data.site.siteMetadata.title}
            </animated.h1>
        </NameContainer>
    )
}

export default Name

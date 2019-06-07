// libraries
import React from "react"
import { useStaticQuery } from "gatsby"
import { useSpring, animated } from "react-spring"

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
    })

    return (
        <animated.h1 style={fadein}>{data.site.siteMetadata.title}</animated.h1>
    )
}

export default Name

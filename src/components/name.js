// libraries
import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import {useSpring, animated} from 'react-spring'
import { FaGithub, FaTwitterSquare, FaTwitter } from "react-icons/fa"
// components
import Container from "./containers/CenterContainer"

const Name = () => {
  const animation = useSpring({config: { duration: 1000 }, opacity: 1, from: {opacity: 0}});
  // components need static query instead of exporting method like Pages
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            links {
              github
            }
          }
        }
      }
    `
  )
  return (
    <Container>
      <animated.h1 style={animation}>{data.site.siteMetadata.title}</animated.h1>
      {/* Icon Container */}
      <div
        style={{
          display: 'flex'
        }}
      >
        {/* Link Container */}
        <a href={data.site.siteMetadata.links.github}>
          <FaGithub
            style={{
              backgroundColor: "white",
              display: 'flex',
            }}
          />
        </a>
        <a href={data.site.siteMetadata.links.twitter}>
          <FaTwitterSquare
            style={{
              backgroundColor: "white",
              display: 'flex'
            }}
          />
        </a>
      </div>
    </Container>
  )
}

export default Name

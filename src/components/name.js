// libraries
import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import { FaGithub, FaTwitterSquare, FaTwitter } from "react-icons/fa"
// components
import Container from "./containers/CenterContainer"

const Name = () => {
  const [reveal, setReveal] = useState(false)
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
      <h1>{data.site.siteMetadata.title}</h1>
      {/* Icon Container */}
      <div
        style={{
          display: 'flex'
        }}
        onMouseOver={() => setReveal(true)}
      >
        {/* Link Container */}
        <a href={data.site.siteMetadata.links.github}>
          <FaGithub
            style={{
              backgroundColor: "white",
              display: reveal ? 'flex' : 'none'
            }}
          />
        </a>
        <a href={data.site.siteMetadata.links.twitter}>
          <FaTwitterSquare
            style={{
              backgroundColor: "white",
              display: reveal ? 'flex' : 'none'
            }}
          />
        </a>
      </div>
    </Container>
  )
}

export default Name

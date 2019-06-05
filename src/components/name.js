// libraries
import React from "react"
import { useStaticQuery } from "gatsby"
import { FaGithub } from "react-icons/fa"
// components
import Container from "./container"

const Name = () => {
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
      <div
        styles={{
          height: "25px",
          width: "25px",
        }}
      >
        <a href='href={data.site.siteMetadata.links.github}'><FaGithub style={{backgroundColor: 'white'}} /></a>
      </div>
    </Container>
  )
}

export default Name

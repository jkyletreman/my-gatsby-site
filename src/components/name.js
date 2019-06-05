import React from "react"
import { useStaticQuery } from "gatsby"
import Container from "./container"

const Name = () => {
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
  return (
    <Container>
      <h1>{data.site.siteMetadata.title}</h1>
    </Container>
  )
}

export default Name
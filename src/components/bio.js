/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/steve.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`
          }}
        />
      )}
      {author?.name && (
        <p>
          Hey I'm <strong>{author.name}</strong>. I work as a{" "}
          {author?.summary || null}
          {` `}
          <br />
          You can also follow me on
          <a href={`https://twitter.com/${social?.twitter || ``}`}> Twitter</a>,
          <a href={`https://www.linkedin.com/in/stevemendis/`}> LinkedIn</a>,
          <a href={`https://github.com/stevemendis`}> Github</a>,
          <a href={`https://medium.com/@stevemendis66`}> Medium</a>.
        </p>
      )}
    </div>
  )
}

export default Bio

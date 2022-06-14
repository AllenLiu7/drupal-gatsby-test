import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"

const ArticlePage = (query) => {

  console.log(query.data.nodeArticle);
  return (
    <>
   
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <GatsbyImage image={query.data.nodeArticle.relationships.field_image.localFile.childImageSharp.gatsbyImageData} alt='image' />
    </Layout>
    </>
  )
}

export const query = graphql`
query Article($articleId: String) {
  nodeArticle(id: {eq: $articleId}) {
    body {
      value
    }
    title
    relationships {
      field_image {
        localFile {
          childImageSharp {
            gatsbyImageData(  width: 800
              )
          }
        }
      }
    }
  }
}`

export default ArticlePage
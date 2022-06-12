import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactHtmlParser from 'react-html-parser';

const IndexPage = (query) => {

  console.log(query.data.allNodeArticle.nodes);

  
  return (
    <Layout pageTitle="Home Page">
      {query.data.allNodeArticle.nodes.map(({body, id,title, relationships}) => {
        return <div key={id}>
          <h3>{title}</h3>
          <GatsbyImage image={relationships.field_image.localFile.childImageSharp.gatsbyImageData} alt='image' />
          <div>{ReactHtmlParser(body.value)}</div>
        </div>
      })}
    </Layout>
  )
}

export const query = graphql`
{
  allNodeArticle {
    nodes {
      body {
        value
      }
      title
      created
      relationships {
        field_image {
          localFile {
            childImageSharp {
              
                gatsbyImageData(  width: 300
                  placeholder: BLURRED)
              
            }
          }
        }
      }
      id
    }
  }
}
`

export default IndexPage


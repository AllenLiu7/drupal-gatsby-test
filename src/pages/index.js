import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { Link } from "gatsby"
import {  GatsbyImage } from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"
import ReactHtmlParser from 'react-html-parser';

import * as style from "../pages/index.module.css"


const IndexPage = (query) => {

  return (
    <>
    <div className={style.hero}>
    <StaticImage src="../images/hero.jpg" alt="A dinosaur" className={style.hero}/>
    </div>
    <Layout pageTitle="Home Page">
      <div className='d-flex flex flex-wrap container justify-content-center'>
      {query.data.allNodeArticle.nodes.map(({body, id,title, relationships, path}) => {
        return <div key={id} className={`col-2 m-3 ${style.cardContainer}`}>
          <Link to={path.alias}>
            <h3>{title}</h3>
            <GatsbyImage image={relationships.field_image.localFile.childImageSharp.gatsbyImageData} alt='image' />
            {/* <div className='mt-3'>{ReactHtmlParser(body?.value)}</div> */}
          </Link>
        </div>
      })}
      </div>
    </Layout>
    </>
  )
}

export const query = graphql`
{
  allNodeArticle {
    nodes {
      body {
        value
      }
      path {
        alias
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


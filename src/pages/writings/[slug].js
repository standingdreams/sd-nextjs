import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter'

import { Layout } from '../../components/Layout'
import { getAllPostSlugs, getPostData } from '../../lib/writings'

const options = { year: 'numeric', month: 'long', day: 'numeric' }
const components = { Link }

export default function Posts({ source, frontMatter }) {
  return (
    <Layout>
      <div className="container">
        <div className="blog">
          <header className="blog__header">
            <p className="blog__date">{new Date(frontMatter.date).toLocaleDateString('en-US', options)}</p>
            <h1 className="blog__heading">{frontMatter.title}</h1>
          </header>
          <div className="blog__content">
            <MDXRemote {...source} components={components} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

const paths = getAllPostSlugs()

export async function getStaticPaths() {
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postContent = await getPostData(params.slug)
  const { data, content } = matter(postContent)
  const mdxSource = await serialize(content, {
    components,
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

Posts.propTypes = {
  source: PropTypes.any,
  frontMatter: PropTypes.any,
}

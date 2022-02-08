import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { Layout } from '../../components/Layout'
import { getSortedPosts } from '../../lib/writings'

export default function Writings({ posts }) {
  return (
    <Layout title="Writings">
      <section className="listings-wrapper">
        <div className="container">
          <div className="listings-item__wrapper">
            {posts?.map((post) => (
              <Link href={`/writings/${post.slug}`} key={post.slug}>
                <a className="listings-item__name">{post.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const { posts } = getSortedPosts()

  return {
    props: {
      posts,
    },
  }
}

Writings.propTypes = {
  posts: PropTypes.array,
}

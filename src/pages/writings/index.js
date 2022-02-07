import React from 'react'
import Link from 'next/link'
import { Layout } from '../../components/Layout.jsx'

export default function Writings() {
  return (
    <Layout title="Writings">
      <section className="listings-wrapper">
        <div className="container">
          <div className="listings-item__wrapper">
            <Link href="/writings/refactoring-my-portfolio">
              <a className="listings-item__name">Refactoring My Portfolio</a>
            </Link>
            <Link href="/writings/heroku-vs-digitalocean/deploying-to-heroku">
              <a className="listings-item__name">Heroku vs DigitalOcean: Deploying to Heroku</a>
            </Link>
            <Link href="/writings/heroku-vs-digitalocean/the-experiment-continues">
              <a className="listings-item__name">Heroku vs DigitalOcean: The Experiment Continues</a>
            </Link>
            <Link href="/writings/heroku-vs-digitalocean/handling-redirects-with-digitalocean">
              <a className="listings-item__name">Heroku vs DigitalOcean: Handling Redirects with DigitalOcean</a>
            </Link>
            <Link href="/writings/heroku-vs-digitalocean/getting-started-with-digitalocean">
              <a className="listings-item__name">Heroku vs DigitalOcean: Getting Started with DigitalOcean</a>
            </Link>
            <Link href="/writings/heroku-vs-digitalocean/an-experiment-in-the-making">
              <a className="listings-item__name">Heroku vs DigitalOcean: An Experiment in the Making</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

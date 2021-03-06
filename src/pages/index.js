import Head from 'next/head'
import Link from 'next/link'
import { ContactBlock } from '../components/ContactBlock'

import { Layout } from '../components/Layout'
import ProfileInterests from '../components/ProfileInterests'
import { homeData } from '../data'

const { capabilities, currentInterests, otherInterests } = homeData

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Standing Dreams</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="profile-wrapper">
        <div className="profile__aboutContent">
          <div className="container">
            <div className="profile__aboutWrap">
              <h1 className="el-h2">About</h1>
              <h2 className="el-h1">Douglas Rogers</h2>
              <p>
                I am a frontend engineer with over 13 years of industry experience building websites, HTML emails and
                web applications, providing strategy while building and launching high quality, engaging products. I
                have professional experience working with JavaScript and PHP. Other frameworks and technologies I've
                worked with include NodeJS, React, VueJS, Gatsby and NextJS.
              </p>
              <Link href="/portfolio">
                <a className="btn btn3">View Portfolio</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile__capabilities">
          <div className="container">
            <h2 className="el-h3">Capabilities</h2>
            <div className="profile__grid">
              {capabilities.map((item, index) => (
                <div key={`item-${index}`} className="profile__grid-item">
                  <h3 className="el-h4">{item.capability}</h3>
                  <p>{item.capabilityDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactBlock />
        <div className="profile__block profile__block--last">
          <div className="container">
            <div className="profile__grid">
              <ProfileInterests heading="Current Interests" items={currentInterests} />
              <ProfileInterests heading="Other Interests" items={otherInterests} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

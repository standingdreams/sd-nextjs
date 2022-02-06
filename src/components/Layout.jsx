import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ title, children, pageClass, landing }) => {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    window.onload = () => {
      document.body.classList.remove('preload')
    }
  }, [])

  return (
    <>
      <section className="site-wrapper">
        <Header
          siteTitle="Standing Dreams"
          landing={landing}
          hamburgerState={() => {
            setNavOpen(!navOpen)
          }}
        />
        <main className="main-wrapper">{children}</main>
      </section>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  pageClass: PropTypes.string,
  landing: PropTypes.string,
}

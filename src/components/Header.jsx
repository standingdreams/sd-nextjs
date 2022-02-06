import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

export function Header({ hamburgerState, landing }) {
  return (
    <>
      <header className="masthead">
        <article className="container">
          {landing ? (
            <div className="header-info">
              <Link href="/">
                <a className="site-logo">Standing Dreams</a>
              </Link>
            </div>
          ) : (
            <>
              <div className="header-info">
                <Link href="/">
                  <a className="site-logo">Standing Dreams</a>
                </Link>
                <span className="author-name">Douglas Rogers</span>
              </div>
              <nav className="main-nav">
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/film">
                      <a>Film Lab</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/writings">
                      <a>Writings</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                id="burger"
                role="button"
                tabIndex="0"
                onClick={() => {
                  hamburgerState()
                }}
                onKeyDown={(event) => {
                  if (event.keyCode === 32) {
                    hamburgerState()
                  }
                }}
              >
                <div className="bars">
                  <div className="bar bar1" />
                  <div className="bar bar2" />
                  <div className="bar bar3" />
                </div>
              </div>
            </>
          )}
        </article>
      </header>
      {landing !== true && (
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/writings">Writings</Link>
            </li>
          </ul>
          <ul className="mobile-social">
            <li>
              <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="http://www.github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

Header.propTypes = {
  landing: PropTypes.bool,
  hamburgerState: PropTypes.func,
}

Header.defaultProps = {
  landing: false,
}

export default Header

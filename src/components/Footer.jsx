import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mastfoot">
      <article className="container">
        <nav className="social-info">
          <ul>
            <li>
              <a
                className="social-icon"
                href="https://www.github.com/standingdreams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/github.png" alt="logo of Github" />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="https://www.instagram.com/alwaysbeenwise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/instagram.png" alt="logo of Instagram" />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/standingdreams/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin.png" alt="logo of LinkedIn" />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="https://www.twitter.com/codeOvrCoffee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/twitter.png" alt="logo of Twitter" />
              </a>
            </li>
            <li>
              <a
                className="social-icon"
                href="https://www.youtube.com/channel/UCfK2oy4Yqq0A4YbTZGiz-3g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/youtube.png" alt="logo of YouTube" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-info">
          <span>
            {new Date().getFullYear()} Standing Dreams, Inc. All&nbsp;Rights&nbsp;Reserved. |{' '}
            <Link href="/colophon">
              <a>Colophon</a>
            </Link>
          </span>
        </div>
      </article>
    </footer>
  )
}

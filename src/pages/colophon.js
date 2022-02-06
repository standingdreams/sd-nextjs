import React from 'react'
import { Layout } from '../components/Layout'
import { ContactBlock } from '../components/ContactBlock'

export default function colophon() {
  return (
    <Layout title="Colophon">
      <div className="profile-wrapper">
        <div className="profile__aboutContent">
          <div className="container">
            <div className="profile__aboutWrap">
              <h1 className="el-h2">A brief statement about the publication</h1>
              <h2 className="el-h1">Col·o·phon</h2>
              <p>
                This site is forever under construction because I'm a recovering perfectionist. Designed in{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.sketch.com/">
                  Sketch
                </a>
                . Built with{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/">
                  VS Code
                </a>
                . Version controlled with{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/standingdreams">
                  GitHub
                </a>{' '}
                using{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.gitkraken.com/invite/ccaDEdwC">
                  GitKraken
                </a>
                . Powered by{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
                  NextJS
                </a>
                . Body copy is{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://fonts.adobe.com/fonts/sofia">
                  Sofia Pro
                </a>
                . Images are distributed by{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://cloudinary.com/">
                  Cloudinary
                </a>
                .{' '}
              </p>
              <p>
                The idea for this colophon was <span className="strikethrough">stolen</span> inspired by{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://sambrown.me/colophon">
                  Sam Brown
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <ContactBlock />
      </div>
    </Layout>
  )
}

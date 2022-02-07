import React from 'react'
import { MDXProvider } from '@mdx-js/react'

export default function (props) {
  const components = {
    pre: (props) => <pre {...props} />,
    code: (props) => <code {...props} />,
  }

  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  )
}

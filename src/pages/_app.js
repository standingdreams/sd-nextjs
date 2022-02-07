import PropTypes from 'prop-types'
import MDXProvider from '../components/MDXProvider'

import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

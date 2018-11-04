import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>threadkind</title>
        <meta name="description" content="Personal blog on coding and creating" />
    </Helmet>

    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper

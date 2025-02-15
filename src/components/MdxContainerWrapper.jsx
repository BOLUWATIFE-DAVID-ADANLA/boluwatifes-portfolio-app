import { MDXProvider } from '@mdx-js/react'
import React from 'react'
const MdxContainerWrapper = ({children}) => {
  return (
   <MDXProvider>
      {children}
   </MDXProvider>
  )
}

export default MdxContainerWrapper
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DynamicIcon = ({icon}) => {
  return (
   <FontAwesomeIcon icon={icon} className="text-gray-600 text-3xl hover:text-black" />

  )
}

export default DynamicIcon
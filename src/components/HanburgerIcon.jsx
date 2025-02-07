import React from 'react'

const HanburgerIcon = ({ onClick }) => {
  return (
   <button onClick={onClick}>
<svg
   width="30"
   height="30"
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   className='block md:hidden'
 >
   <path d="M4 18L20 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
   <path d="M4 12L20 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
   <path d="M4 6L20 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
 </svg>
   </button>
   
  )
}

export default HanburgerIcon
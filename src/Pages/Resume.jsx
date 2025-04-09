import resume from '../assets/Resume.pdf';
import React from 'react'

function Resume() {
  return (
    <div className='flex justify-center'>
      <embed src={resume} className='pdf-dimensions'></embed>
    </div>
  )
}

export default Resume
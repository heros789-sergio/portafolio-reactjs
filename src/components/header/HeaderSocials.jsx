import React from 'react'
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin className='header__socials-icon'/></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub className='header__socials-icon'/></a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer"><BsYoutube className='header__socials-icon'/></a>
    </div>
  )
}

export default HeaderSocials
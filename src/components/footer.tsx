import '../styles/footer.css'
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="copywrite-container">
        <p className='copywrite'>
          <a href='https://www.github.com/JT2M0L3Y'>
            © 2024 Jonathan Smoley
          </a>
        </p>
      </div>

      <div className='social-container'>
        <a href='https://www.linkedin.com/in/jonathansmoley/'
          target='_blank' rel='noreferrer' className='social'>
          <AiFillLinkedin />
        </a>
        <a href='https://www.instagram.com/jonathan.smoley/'
          target='_blank' rel='noreferrer' className='social'>
          <AiFillInstagram />
        </a>
        <a href='https://www.facebook.com/jonathan.smoley.1/'
          target='_blank' rel='noreferrer' className='social'>
          <AiFillFacebook />
        </a>
      </div>
    </div>
  )
}
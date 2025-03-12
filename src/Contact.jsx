import { SocialIcon } from 'react-social-icons'
import './App.css'
import { useTranslation } from 'react-i18next';
import profilePicture from './assets/profile_pic3.png'

const Contact = () => {
  const { t, i18n } = useTranslation();

  return(
  <section className="home">
    <div className="home-content">
      <h1>{t('Contact-Get-In-Touch')}</h1>
      <p>
        {t('Contact-Bottom-Text')}
      </p>
      <div className="social-media">
        <SocialIcon url="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" />
        <SocialIcon url="mailto:milananovakovic922@gmail.com" />
        <SocialIcon url="https://wa.me/00491621752413" target="_blank" rel="noopener noreferrer" />
      </div>
      <a href="https://drive.google.com/file/d/1YtN2lRhIuryV-uu8aGxeCkVjI5CDy048/view?usp=sharing" target="_blank" className="btn">Download CV</a>
    </div>
    <div className="home-img">
      <img src={profilePicture} alt="" />
    </div>
  </section>
  );
};

export default Contact;
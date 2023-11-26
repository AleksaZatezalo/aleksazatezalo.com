import React from 'react'
import {faTwitter, faMedium, faGithub, faGooglePlay, faLinkedinIn, faYoutube, faSpotify} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
            <a href="https://twitter.com/ZatezaloAleksa">
                            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://aleksazatezalo.medium.com/">
                <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href="https://github.com/AleksaZatezalo">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://play.google.com/store/apps/developer?id=Aleksa+Zatezalo">
                <FontAwesomeIcon icon={faGooglePlay} />
            </a>
            <a href="https://www.linkedin.com/in/aleksa-zatezalo-39a891150/">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.youtube.com/channel/UCs3htMGLR720HXC3jBNWGxA">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://open.spotify.com/user/lmzrdyu7mww7s1og3wsa3u1n5">
                <FontAwesomeIcon icon={faSpotify} />
            </a>
    </div>
  )
}

export default HeaderSocials


import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4>
                            Software 
                        </h4>
                        <ul className='list-unstyled'>
                            <li>
                                GitHub
                            </li>
                            <li>
                                Google Play
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>
                            Social Profiles
                        </h4>
                        <ul className='list-unstyled'>
                            <li>
                                LinkedIn
                            </li>
                            <li>
                                Medium
                            </li>
                            <li>
                                Twitter
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <p className='col-sm center'>
                        &copy;{new Date().getFullYear()} Aleksa Zatezalo | All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
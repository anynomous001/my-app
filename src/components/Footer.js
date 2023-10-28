import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaTwitter, FaPhone, FaMailBulk } from 'react-icons/fa'
import './FooterStyle.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div>
                        <FaHome size='25' style={{ color: '#fff' }} />
                        <h4>My Address</h4>
                    </div>
                    <div>
                        <FaPhone size='25' style={{ color: '#fff' }} />
                        <p>9874353532</p>
                    </div>
                    <div>
                        <FaMailBulk size='25' style={{ color: '#fff' }} />
                        <p>Chakrobortypritam1@gmail.com</p>
                    </div>
                </div>
                <div className='right'>
                    <h4>About The Company</h4>
                    <p>Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public` folder during the build.
                        Only files inside the `public` folder can be referenced from the HTML. </p>
                    <div>
                        <FaFacebook size='25' style={{ color: '#fff' }} /><FaTwitter size='25' style={{ color: '#fff' }} /><FaLinkedin size='25' style={{ color: '#fff' }} />
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Footer
import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <>
    <footer className='footer-main'>
        <Container>
            <div className='footer-top-wrapper'>
                <Row>
                    <Col>
                        <div className='footerlogo-wrap'>
                            <Link to='/'>Logo Name</Link>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='wrapper-listitem'>
                            <span>QUICK LINKS</span>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>About Us</Link></li>
                                <li><Link to='/'>Courses</Link></li>
                                <li><Link to='/'>Blog</Link></li>
                                <li><Link to='/'>Contact Us</Link></li>
                                <li><Link to='/'>Terms & Condition</Link></li>
                                <li><Link to='/'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className='wrapper-listitem-contact'>
                            <span>CONTACT LINKS</span>
                            <ul>
                                <li><i><FontAwesomeIcon icon={faPhone} /></i><Link to='tel:+4401234567890'>+440 12345 67890</Link></li>
                                <li><i><FontAwesomeIcon icon={faEnvelope} /></i><Link to='mailto:support@test.com'>support@test.com</Link></li>
                                <li><i><FontAwesomeIcon icon={faLocationDot} /></i><p>123, Lorem imsum road UK</p></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            
        </Container>
        <div className='outerwrapper-footerbtm'>
            <Container>
                <div className='footerBottm-wrap'>
                    <p>© Copyright <Link to='/'>Company</Link>. All Rights Reserved</p>
                    {/* <ul>
                        <li><Link href='#'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                        <li><Link href='#'><FontAwesomeIcon icon={'twitter' } /></Link></li>
                        <li><Link href='#'><FontAwesomeIcon icon={'instagram'} /></Link></li>
                        <li><Link href='#'><FontAwesomeIcon icon={'discord'} /></Link></li>
                    </ul> */}
                </div>
            </Container>
        </div>
    </footer>
    </>
  )
}

export default Footer
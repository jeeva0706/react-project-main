
import "../Pages/Contact.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import { Col, Row, Container } from 'react-bootstrap';

import { Form, Button } from 'react-bootstrap';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <div>
            <div className="image-book-courses" aria-label="Background image of books">
                <h1 className="h1-courses" >CONTACT</h1>
                <h6 className="h6-home-to-courses">HOME <span><FontAwesomeIcon className="iconright-arrow" icon={faAnglesRight} /></span> CONTACT</h6>
            </div>

            <div className="contact-page mt-5">
                <Container fluid>
                    <Row>
                        <Col>
                            <h5 className="text-center h5-contact">CONTACT</h5>
                            <h1 className="text-center h1-contact">Contact For Any Query</h1>
                        </Col>
                    </Row>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={10} md={8} lg={6} className="input-data-message mt-5">
                                <div className="input-datas-content p-4">
                                    <Form>
                                        <Form.Group controlId="formName" className="mt-4">
                                            <Form.Control type="text" placeholder="Your Name" className="from-data-name" />
                                        </Form.Group>
                                        <Form.Group controlId="formEmail" className="mt-4">
                                            <Form.Control type="email" placeholder="Your Email" className="from-data-name" />
                                        </Form.Group>
                                        <Form.Group controlId="formSubject" className="mt-4">
                                            <Form.Control type="text" placeholder="Subject" className="from-data-name" />
                                        </Form.Group>
                                        <Form.Group controlId="formMessage" className="mt-4">
                                            <Form.Control as="textarea" rows={3} placeholder="Message" className="from-data-message" />
                                        </Form.Group>
                                        <div className="d-flex justify-content-center mt-4">
                                            <Button variant="primary" className="send-button" type="submit">
                                                Send Message
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>

            {/* third page content */}

            <div className="footer">
                <Container fluid>
                    <Row className="row-of-footer ">
                        <Col xl={7} lg={7}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className='column-1 text-start ms-2 '>
                                    <h5 className="FOOTER-DATA-COL-1 mb-4">GET IN TOUCH</h5>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>  123 Street, New York, USA
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708" />
                                        </svg> +012 345 67890
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                        </svg>  info@example.com
                                    </p>

                                    {/* icons  */}


                                    <div className="social-icons mt-4">
                                        <span className="icon-twitter">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                            </svg>
                                        </span>
                                        <span className="icon-facebook">
                                            <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                <path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z" />
                                            </svg>
                                        </span>
                                        <span className="icon-linkedin">
                                            <svg baseProfile="tiny" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001C18.683,11.04,19,12.002,19,13.353V19z" />
                                                <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
                                            </svg>
                                        </span>
                                        <span className="icon-instagram">
                                            <svg viewBox="0 0 128 128" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z" />
                                                <path d="M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z" />
                                                <path d="M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z" />
                                            </svg>
                                        </span>
                                    </div>

                                </Col>
                                <Col lg={5} md={4} sm={12} className='column-2 text-start sm-mb-3'>
                                    <h5 className="FOOTER-DATA-COL-1 mb-4">OUR COURSES</h5>
                                    <div>
                                        <p className="p-text-underline">
                                            <FontAwesomeIcon icon={faAngleRight} /> Web Design
                                        </p>
                                        <p className="p-text-underline">
                                            <FontAwesomeIcon icon={faAngleRight} /> App Design
                                        </p>
                                        <p className="p-text-underline">
                                            <FontAwesomeIcon icon={faAngleRight} /> Marketing
                                        </p>
                                        <p className="p-text-underline">
                                            <FontAwesomeIcon icon={faAngleRight} /> Research
                                        </p>
                                        <p className="p-text-underline">
                                            <FontAwesomeIcon icon={faAngleRight} />  SEO
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl={5} lg={7} className='email-entry-for-footer text-start'>
                            <h5 className="FOOTER-DATA-COL-1 mb-4 text-lg-center me-lg-5">NEWSLETTER</h5>
                            <div className='fotter-pra-footer'>
                                <p className='mb-5 '>
                                    Rebum labore lorem dolores kasd est, et ipsum amet et
                                    at kasd, ipsum sea tempor magna
                                    tempor. Accu kasd sed ea duo ipsum. Dolor duo
                                    eirmod sea justo no lorem est diam
                                </p>
                            </div>
                            <div className="newsletter-signup">
                                <input type="text" className="input-button-type" placeholder="Enter your Email" />
                                <button className="btn-data-footer">Sign Up</button>
                            </div>
                        </Col>
                    </Row>
                    <div className="last-content lg-justify-content-start">
                        <Row className="align-items-center row-for-footer-method">
                            <Col md={6} sm={12} className="align-items-center mt-4">
                                <p>
                                    ©<span style={{ fontSize: '15px' }}>Domain Name</span> . All Rights Reserved. Designed by{' '}
                                    <span style={{ fontSize: '15px' }}> HTML Codex</span>
                                </p>
                            </Col>
                            <Col md={6} sm={12} className="d-inline-flex justify-content-end align-items-center mt-4">
                                <h6 className="me-4">Privacy</h6>
                                <h6 className="me-4">Terms</h6>
                                <h6 className="me-4">FAQs</h6>
                                <h6 className="me-4">Help</h6>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>


        </div>

    )
};

export default Contact;

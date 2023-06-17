import React, { useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = () => {
    const [modal, setModal] = useState(false);

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Kishaloy Kar Chowdhury</span>
                      ,a BTech Student at BIT Mesra.</p>
                <h1>I am a Front-End Developer.</h1>
                <h3>I can create amazing websites as well as apps with desired functionalities. </h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - kishaloy01@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={heroImg} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero

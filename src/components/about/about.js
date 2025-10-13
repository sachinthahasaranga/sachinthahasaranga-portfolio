import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';
import sign from '../../images/sign.png'
import about from '../../images/about.png'
import rotate from '../../images/rotate-text.svg'


const About = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }


    return (
        <section className="wpo-about-section" id='about'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Why You Hire Me?</h2>
                            <p>I turn ideas into reliable, high-performance digital products web, 
                                mobile, and AI-assisted shipped to production with clear code and clear results.</p>
                        </div>
                    </div>
                </div>
                <div className="about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-content">
                                <p>Need something you can launch and rely on? I turn ideas into clean, 
                                    scalable products: e-commerce sites, dashboards, LMS/WMS tools, and 
                                    cross-platform apps. I work end-to-end, align with your goals, and integrate 
                                    automation/AI where it saves time or cost then ship to production with clear documentation 
                                    and handover. </p>
                                <div className="about-info">
                                    <h4>Sachintha Niyangoda</h4>
                                    <span>- Software Engineer</span>
                                </div>
                                <div className="signeture">
                                    <img src={sign} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-img">
                                <img src={about} alt="" />
                                <div className="rotate-text">
                                    <img src={rotate} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="wpo-service-area">
                                {Services.slice(0, 3).map((service, srv) => (
                                    <div className="wpo-service-item" key={srv}>
                                        <div className="icon">
                                            <i><img src={service.sIcon} alt="" /></i>
                                        </div>
                                        <div className="wpo-service-text">
                                            <h3 onClick={() => handleClickOpen(service)}>{service.sTitle}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </section>
    )
}

export default About;
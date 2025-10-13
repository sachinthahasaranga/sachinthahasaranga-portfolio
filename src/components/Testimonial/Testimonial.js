import React from 'react';
import Slider from "react-slick";
import ts1 from '../../images/testimonial/img-22.png'
import ts2 from '../../images/testimonial/img-33.png'
import ts3 from '../../images/testimonial/img-11.png'
import { Link } from 'react-scroll';



const testimonial = [
  {
    id: '01',
    tImg: ts1,
    Des: "“Our new site showcases custom metalworks clearly and feels fast on mobile. The catalog and inquiry flow make it easy for customers to request quotes without back-and-forth.”",
    Title: 'Mr.Oshan Dinilka',
    Sub: 'Lixr Innovation | Metalworks'
  },
  {
    id: '02',
    tImg: ts2,
    Des: "“Packages are easy to compare, and inquiries now come with all the right details. WhatsApp/contact integrations help us respond faster to travelers.”",
    Title: 'Mr.Rumesh',
    Sub: 'SMT Holiday Planners | Travel & Tours'
  },
  {
    id: '03',
    tImg: ts3,
    Des: "“Clean product listings, smooth filters, and a simple inquiry/cart flow. The admin is straightforward, so updating items and prices takes minutes.”",
    Title: 'Mr.Janith Dissanayake',
    Sub: 'Accessara | Accessories'
  }
]


const Testimonial = () => {

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12">
                        <div className="testimonials-left">
                            <h3>What My Customers Says About Me</h3>
                            <p>I craft fast, maintainable products that look great and work even better.</p>
                            <Link to="contact" spy={true} smooth={true} duration={500} className="theme-btn">Contact our Support</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="testimonials-right">
                            <div className="testimonials-wrapper testimonial-active">
                                <Slider {...settings}>
                                    {testimonial.map((testimonial, tsm) => (
                                        <div className="testimonials-item" key={tsm}>
                                            <div className="testimonials-item-bottom">
                                                <div className="testimonials-item-bottom-author">
                                                    <img src={testimonial.tImg} alt=""/>
                                                </div>
                                                <div className="testimonials-item-bottom-author-text">
                                                    <h3>{testimonial.Title}</h3>
                                                    <span>{testimonial.Sub}</span>
                                                </div>
                                            </div>
                                            <div className="testimonials-item-top">
                                                <p>“{testimonial.Des}”</p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
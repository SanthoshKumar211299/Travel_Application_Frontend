import React from 'react'
import '../styles/home.css'
import { Col, Container, Row } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList'
import MasonryGalleryImages from '../components/image-gallery/MasonryGalleryImages'
import Testimonial from '../components/Testimonial/Testimonial'


const Home = () => {
  return (
    <>
    {/*======Hero Section Start======= */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                <div className='hero__content'>
                    <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'Know Before You Go'}/>
                     <img src={worldImg} alt=""/>
                    </div>
                    <h1>Travelling Opens the door to creating <span className='highlight'>memories</span></h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe autem dignissimos harum temporibus? Minus architecto animi perspiciatis possimus aperiam hic veniam laborum adipisci, voluptas quod a vero doloremque esse dolores.
                    </p>
                </div>

                </Col>
                <Col lg='2'>
                <div className='hero__img-box'>
                    <img src={heroImg} alt='' />
                </div>
                </Col>
                <Col lg='2'>
                <div className='hero__img-box hero__video-box mt-4'>
                    <video src={heroVideo} alt='' controls/>
                </div>
                </Col>
                <Col lg='2'>
                <div className='hero__img-box mt-5'>
                    <img src={heroImg02} alt='' />
                </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
    </section>
    {/*======Hero Section end======= */}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                <h5 className='services__subtitle'>What We Serve</h5>
                <h2 className='services__title'>We Offer Our Best Services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>
    {/*======Featured Tour section start ======*/}
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                <Subtitle subtitle={'explore'}/>
                <h2 className='featured_tour-title'>Our Featured tours</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section>
        {/*======Featured Tour section end======*/}
        {/*=======Experience Section Start======*/}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                      <div className="experience__content">
                      <Subtitle subtitle={'Experience'}/>

                      <h2>With all our experince <br/> we will serve you</h2>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, magnam.<br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, perspiciatis!
                      </p>
                      </div>
                      <div className="counter__wrapper d-flex align-items-center gap-5 ">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                        </div>
                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Regular Trip</h6>
                        </div>
                        <div className="counter__box">
                            <span>15</span>
                            <h6>Years Experience</h6>
                        </div>
                      </div>
                    </Col>
                    <Col lg ='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt=''/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/*=======Experience Section end======*/}
        {/*=======Gallery Section Start========*/}
         <section>
            <Container>
                <Row>
                    <Col lg='12'>
                     <Subtitle subtitle={'Gallery'}/>
                     <h2 className="gallery__title">vist our customers tour gallery</h2>
                    </Col>
                    <Col lg='12'>
                      <MasonryGalleryImages />
                    </Col>
                </Row>
            </Container>
         </section>


        {/*=======Gallery Section Start========*/}
        {/*======testimonial section Start=====*/}
        <section>
            <Container>
                <Row>
                    <Col>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className="testimonial__title">What Our Fans Say About Us</h2>
                    </Col>
                    <Col lg='12' >
                    <Testimonial/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/*======testimonial section End=====*/}
        
    </>
  )
}

export default Home

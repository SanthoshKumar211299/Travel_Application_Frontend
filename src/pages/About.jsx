import React from 'react'
import { Col, Container ,Row} from 'reactstrap'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import { Link } from 'react-router-dom'
const About = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='8'>
            <div className='hero__content'>
                    <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'Know Get About Our Travel Plans'}/>
                     <img src={worldImg} alt=""/>
                    </div>
                    <h1>Travelling Opens the door to creating <span className='highlight'>memories</span></h1>
                    <p>
                    <span className='highlight'>SandyTravel </span>is your go-to travel companion designed to simplify your journey from start to finish. With [unique feature or value proposition], we make it easy for you to [primary benefit, e.g., find the best travel deals, discover hidden gems, or plan your perfect trip]. Our mission is to enhance your travel experience with [additional feature or benefit, e.g., personalized recommendations, seamless booking, or real-time updates], ensuring every trip is memorable and hassle-free.
                    </p>
                    <h6> * Get out Tour plans <Link to='/tours' >Click here</Link></h6>
                    <h6>* Search your Tour From Here <Link to='/' >Click Here</Link></h6>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default About

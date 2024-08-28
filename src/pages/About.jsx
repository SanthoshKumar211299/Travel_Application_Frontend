import React from 'react'
import { Col, Container ,Row} from 'reactstrap'

const About = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='8'>
            <div className='about__content'>
            <h1>About SandyTravels </h1>
            <p><span className='highlight'>SandyTravels </span> is your go-to travel companion designed to simplify your journey from start to finish. With [unique feature or value proposition], we make it easy for you to [primary benefit, e.g., find the best travel deals, discover hidden gems, or plan your perfect trip]. Our mission is to enhance your travel experience with [additional feature or benefit, e.g., personalized recommendations, seamless booking, or real-time updates], ensuring every trip is memorable and hassle-free.</p>
            </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default About

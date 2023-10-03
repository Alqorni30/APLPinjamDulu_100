import React from 'react'
import {Container, Row} from 'react-bootstrap'
import ButtonComponent from './ButtonComponent'



const HeroComponent = (props) => {
  const btnSakti = 'Klik saya'

  return (
    <div>
        <Container>
            <Row>
                <h1 className='text-center mt-3'>{props.text}</h1>
            </Row>
        </Container>
        <ButtonComponent test={btnSakti}/>
    </div>
  )
}

export default HeroComponent
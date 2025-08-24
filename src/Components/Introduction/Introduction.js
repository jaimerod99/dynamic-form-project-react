import './Introduction.css'
import { Col,Container,Row }from "react-bootstrap"
import { Button } from "react-bootstrap";
export default function Introduction(){
return(
    <div className='introduction p-3 p-lg-5 mt-5'>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <h1 className='pl-2 text-center'>
                        Welcome to dynamic form <span className='pt-2 pb-4'> that you will do everything that you want</span>

                    </h1>
                    <h4 className='text-center pt-3'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </h4>
                    <div className='d-flex container container-actions mt-5'>
                        <div className='container-button'>
                            <Button className='p-3' onClick={()=>{console.log("Click button")}}>Get in touch</Button>
                            <Button className='p-3' >Get in touch</Button>
                        </div>
                        <div className='btn-start-create'>
                            <a href='#dynamic-form'>Start to create </a>
                        </div>
                    </div>
                    </Col>
            </Row>
        </Container>
    </div>
)
}
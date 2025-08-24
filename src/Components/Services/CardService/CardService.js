// import React from 'react';
import {Card, Col} from 'react-bootstrap'
import './CardService.css'
export default function CardService({service}){
    const {title, subtitle,image,footer,link}=service;
    return (
        // <div>{title}</div>
        <Col className="container-card-service">
            <Card>
                <Card.Img src={image} alt={title}></Card.Img>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
            </Card>
            <Card.Footer>
                <a href={link} target="_blank" rel="noreferrer" >
                    {footer}
                </a>
            </Card.Footer>
        </Col>
    )
}
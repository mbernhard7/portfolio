import {Card} from "react-bootstrap";
import React from "react";
import './SquashCard.css'

function SquashCard(props) {
    return <Card className="mb-4 squash">
        <Card.Body>
            {props.image && <Card.Img className={props.round ? 'round-img' : 'rect-img'} variant="top" src={require("./assets/images/"+props.image).default}/>}
            {props.title && <Card.Title>{props.title}</Card.Title>}
            {props.subtitle && <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>}
            {props.text && <Card.Text>{props.text}</Card.Text>}
            {props.links && props.links.map(link =>
                <Card.Link key={link.url} href={link.url}>{link.name}</Card.Link>
            )}
        </Card.Body>
    </Card>
}

export default SquashCard;
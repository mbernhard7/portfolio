import {Card} from "react-bootstrap";
import React from "react";
import './AboutMeCard.css'
import aboutMe from "./assets/data/personal.json"

function AboutMeCard() {
    const today = new Date();
    const birthDate = new Date(aboutMe.birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return <Card className="mb-4 mt-4 horizontal">
        <Card.Body className='caption'>
            {aboutMe.image && <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/"+aboutMe.image}/>}
            {aboutMe.name && <Card.Title>{aboutMe.name}</Card.Title>}
            {aboutMe.short_description && <Card.Subtitle className="mb-2 text-muted">{aboutMe.short_description}</Card.Subtitle>}
            {aboutMe.organization && <Card.Subtitle className="mb-2 text-muted">{aboutMe.organization}</Card.Subtitle>}
        </Card.Body>
        <Card.Body>
            <br/>
            <div className="textTableRow">
                <span className="infoTitle">Hometown</span>
                <span id='hometown2'>{aboutMe.hometown}</span>

            </div>
            <div className="textTableRow">
                <span className="infoTitle">Residence</span>
                <span>{aboutMe.residence}</span>
            </div>
            <div className="textTableRow">
                <span className="infoTitle">Email</span>
                <span>{aboutMe.email}</span>
            </div>
            <div className="textTableRow">
                <span className="infoTitle">Age</span>
                <span>{age}</span>
            </div>
            <br/>
            {aboutMe.description && <Card.Text>{aboutMe.description}</Card.Text>}
            {aboutMe.social_links && aboutMe.social_links.map(link =>
                <Card.Link key={link.url} href={link.url}>{link.name}</Card.Link>
            )}
        </Card.Body>
    </Card>
}

export default AboutMeCard;
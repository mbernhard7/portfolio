import {Button, Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './ResumeCard.css'

function ResumeCard(props) {
    const [isOverflow, setIsOverflow] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        function resetOverflow() {
            let textRef = document.getElementById(props.title.replace(" ","_")+"Text")
            setIsOverflow(textRef.offsetHeight < textRef.scrollHeight ||
                textRef.offsetWidth < textRef.scrollWidth)
        }
        resetOverflow();
        window.addEventListener('resize', resetOverflow);
        return () => window.removeEventListener('resize', resetOverflow);
    }, [expanded, props.title]);

    return <Card className="mb-4 mt-4 resumeCard">
        <Card.Body>
            <div className="headerRow">
                <div className="imageCol">
                    {props.image && <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/"+props.image}/>}
                </div>
                <div className="textCol">
                    {props.title && <Card.Title>{props.title}</Card.Title>}
                    {props.position && <Card.Subtitle className="mb-2 text-muted">{props.position}</Card.Subtitle>}
                    {props.date && <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>}
                </div>
            </div>
            {props.description &&
            <Card.Text id={props.title.replace(" ","_")+"Text"}
                       className={expanded ? "expandedText" : "shortText"}>
                    {props.description.split("\n").map(t => <span key={t}>{t}<br/></span>)}
                </Card.Text>}
            {isOverflow && <Button variant="secondary" onClick={()=>setExpanded(true)}>More</Button>}
            {expanded && <Button variant="secondary" onClick={()=>setExpanded(false)}>Less</Button>}
        </Card.Body>
    </Card>
}

export default ResumeCard;
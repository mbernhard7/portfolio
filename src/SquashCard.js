import {Button, Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './SquashCard.css'

function SquashCard(props) {
    const [isOverflow, setIsOverflow] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        function resetOverflow() {
            let textRef = document.getElementById(props.title.replace(" ","_")+"Text")
            setIsOverflow(!expanded && (textRef.offsetHeight < textRef.scrollHeight ||
                textRef.offsetWidth < textRef.scrollWidth))
        }
        resetOverflow();
        window.addEventListener('resize', resetOverflow);
        return () => window.removeEventListener('resize', resetOverflow);
    }, [expanded, props.title]);

    return <Card className="mb-4 squash">
        <Card.Body>
            {props.image && <Card.Img className={props.round ? 'round-img' : 'rect-img'} variant="top" src={process.env.PUBLIC_URL + "/images/"+props.image}/>}
            {props.title && <Card.Title>{props.title}</Card.Title>}
            {props.subtitle && <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>}
            <div className="linkWrap">
                {props.links && props.links.map(link =>
                    <Card.Link key={link.url} href={link.url}>{link.name}</Card.Link>
                )}
            </div>
            <div className='divider'/>
            {props.text && <Card.Text id={props.title.replace(" ","_")+"Text"}
                                      className={expanded ? "expandedText" : "shortText"}>{props.text}</Card.Text>}
            {isOverflow && <Button variant="secondary" onClick={()=>setExpanded(true)}>More</Button>}
            {expanded && <Button variant="secondary" onClick={()=>setExpanded(false)}>Less</Button>}
        </Card.Body>
    </Card>
}

export default SquashCard;
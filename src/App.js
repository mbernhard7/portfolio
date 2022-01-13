import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import portfolio from "./assets/data/portfolio.json"
import testimonials from "./assets/data/testimonials.json"
import SquashContainer from "./SquashContainer";
import {Accordion, Nav} from "react-bootstrap";
import AboutMeCard from "./AboutMeCard";

function App() {
    const [tab, setTab] = useState("0")

    return <div id="background">
        <Container className="p-5 mb-4 bg-light rounded-3">
            <h1 className="header">Miles Bernhard</h1>
        </Container>
        <Nav justify variant="tabs" activeKey={tab} onSelect={(selectedKey) => setTab(selectedKey)}>
            <Nav.Item>
                <Nav.Link eventKey="0">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="1">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2">Portfolio</Nav.Link>
            </Nav.Item>
        </Nav>
        {tab === "0" &&
            <>
                <AboutMeCard/>
                <div className='divider'>
                    <hr/>
                    <h2>Testimonials</h2>
                    <hr/>
                </div>
                <SquashContainer data={testimonials} round={true}/>
            </>
        }
        {tab === "2" && <SquashContainer data={portfolio}/>}
    </div>
}

export default App;

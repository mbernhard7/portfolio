import React, { useState } from 'react';
import './App.css';
import portfolio from "./assets/data/portfolio.json"
import testimonials from "./assets/data/testimonials.json"
import experiences from "./assets/data/experiences.json"
import education from "./assets/data/education.json"
import SquashContainer from "./SquashContainer";
import AboutMeCard from "./AboutMeCard";
import ResumeCard from "./ResumeCard";

function App() {
    const [tab, setTab] = useState("0")

    function handleTab(t) {
        setTab(t);
        document.getElementById('tabs').scrollIntoView({behavior: "smooth", inline: "nearest"})
        console.log('test');
    }

    return <div id="background">
                <AboutMeCard/>
                <div id='tabs'>
                    <h2 className={tab==="0" ? " tab activeTab" : "tab"}
                        onClick={()=>handleTab("0")}
                    >Resume</h2>
                    <h2  className={tab==="1" ? "tab activeTab" : "tab"}
                         onClick={()=>handleTab("1")}
                    >Portfolio</h2>
                    <h2  className={tab==="2" ? "tab activeTab" : "tab"}
                         onClick={()=>handleTab("2")}
                    >Testimonials</h2>
                </div>
                {tab === "0" &&
                    <div className="contentWindow">
                        <div className="divider">
                            <hr/>
                            <h2>Experiences</h2>
                            <hr/>
                        </div>
                        {experiences.map(e =>
                           <ResumeCard image={e.image}
                                       title={e.title}
                                       position={e.position}
                                       date={e.date}
                                       description={e.description}
                           />
                        )}
                        <div className="divider">
                            <hr/>
                            <h2>Education</h2>
                            <hr/>
                        </div>
                        {education.map(e =>
                            <ResumeCard image={e.image}
                                        title={e.title}
                                        position={e.position}
                                        date={e.date}
                                        description={e.description}
                            />
                        )}
                    </div>}
                {tab === "1" &&
                    <div className="contentWindow">
                        <SquashContainer data={portfolio}/>
                    </div>
                }
                {tab === "2" &&
                    <div className="contentWindow">
                        <SquashContainer data={testimonials} round={true}/>
                    </div>
                }
    </div>
}

export default App;

import React from "react";
import Card from "../components/card";
import db from "../db/db.json";

function portfolioPage() {
    return (
        <>
            <div className="container" id="portfolio">
                <div className="card">
                    <div className="text-center">
                        <h3>Here are a few of my projects</h3>
                        <p>More can be found on GitHub <a href="https://github.com/RRenneke?tab=repositories">here! </a></p>
                    </div>

                    <div className="card-body" id="first-row">
                        <div className="row">
                            { db.map(card => {
                                return (
                                    <Card link={card.link} image={card.image} imageAlt={card.imageAlt} title={card.title} description={card.description}  />
                                )
                            }) }
                 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default portfolioPage;
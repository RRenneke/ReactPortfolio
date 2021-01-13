import React from "react";
import WinterImg from './Winter.jpg'
import AnimalImg from './Animal.jpg'
import CyclingImg from './Cycling.jpg'
import Resume from './RobinRennekeResume.pdf'


function homePage() {  
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            
                            <div className="col-md-4">
                            <img src={WinterImg} alt="Winter Image" className="img-thumbnail" />
                            </div>
                            
                            <div className="col-md-4">
                            <img src={AnimalImg} alt="Animal Image" className="img-thumbnail" />
                            </div>
                            
                            <div className="col-md-4">
                            <img src={CyclingImg} alt="Cycling Image" className="img-thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="card mt-2">
                                    <div className="text-center">
                                        <h3>About Me</h3>
                                    </div>
                                    <div className="card-body">
                                    <p>My name is Robin. I have worked as a professional for many years in a client facing roles but have always been interested in learning more about the technology side of things and enjoyed helping with requirement gathering on agile teams. I have recently earned a Full Stack Developer certification from the SMU BootCamp.</p>

                                    <p>I have a knack for organization. I am excited to be a developer because it will allow me to creatively solve problems in an organized fashion. I know many of my client facing roles will transition into a developer role.  I understand there is never just one stakeholder. The end user, the client, the broker, the Account Manager, all have an opinion. I am able to listen to someone tell me what they think they want and ask valuable leading questions to understand what they actually need. My communication, problem solving, and project management roles are also going to make me a stronger developer.</p>

                                    <p>Through the bootcamp, I have newly developed skills in HTML, CSS, JavaScript, jQuery, Bootstrap, JSON, AJAX, ReactJS, Node.JS, Express.JS, MySQL, MongoDB, Heroku, Git, and GitHub. Through my employers, I have technical skills in SalesForce, Attlassian, Box, GoToMeeting, DocuSign, Canva, HostGator, MailChimp, MAS90, Microsoft Office, Google, and Slack.</p>
                          
                                    <p>I was born and raised in Minnesota. Yes, the winters are cold and I don't miss them. I do miss the 'lake life'. Being able to go for a swim or enjoy the water on the 10,000 lakes, is easy to love. My favorite place is outdoors.  I like to camp, hike, cycle, SUP, and many other outdoor activities. Minnesota has lots birch trees making hiking even more pretty. If I am not being active, reading a book on the patio with a glass of red wine is a nice way to spend an evening.</p> 
                                        
                                        <p>Link to resume <a href={Resume}> here!  </a> </p>
                                        <p>Link to LinkedIn <a href="https://www.linkedin.com/in/robinrenneke/">here! </a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default homePage;
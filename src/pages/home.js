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
                                        <p>My name is Robin. I have worked as a professional for may years in a client facing role. I have always been interested in the technolgy used at the companies I have worked for. I am pursuing a certification from the SMU BootCamp program to see where it takes me.</p>
                                        <p>I was born and raised in Minnesota. Yes, the winters are cold and I don't miss them. I do miss the 'lake life'. Being able to go for a swim or enjoy the water on the 10,000 lakes, is easy to love. My favorite place is outdoors.  I like to camp, hike, cycle, SUP, and many other outdoor activities. Minnesota has lots birch trees making hiking even more pretty. If I am not being active, reading a book on the patio with a glass of red wine is a nice way to spend an evening.</p>
                                        <p>I have a knack for organizing. I am excited to be a developer because it will allow me to creatively solve problems in an organized fashion. I have years of experience working directly with clients. I know this will benefit me in my developer career. I understand there is never just one stakeholder. The enduser, the client, the broker, the Account Manager, all have an opinion. I am able to listen to someone tell me what they think they want and ask valuable leading questions to understand what they actually need. I am ready to take my client facing, requirements gathering, soft skills to actually create the product.</p>
                                        <p>Hopeful of the position of Front-End Developer that gives room for the utilization of exceptional communication and growth. Recently earned a certificate in full stack development from Southern Methodist University. Newly developed skills in HTML, CSS, various CSS frameworks, and JavaScript. With most of my career in a client facing role, I have experience in requirements gathering, meeting deadlines, balancing priorities, and project management. Being the liaison between external and internal stakeholders, I have worked on agile teams to complete and present projects. Due to the uniqueness of the client set I was assigned, I have worked closely with technology teams. Being able to observe made me realize my true passion of working in the technology space.</p>
                                    
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
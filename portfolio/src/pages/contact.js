import React from "react";


function contactPage() {
    return (
        <>
            <div className="container">
                <div className="container">
                    <h2 className="card-title">Please contact me for more information:</h2>
                            
                            <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" className="form-control" />
                            </div>
                            
                            <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="text" className="form-control" />
                            </div>
                            
                            <div className="form-group">
                            <label for="exampleFormControlTextarea1">How can we help eachother?:</label>
                            <textarea className="form-control" rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn btn-warning">Submit</button>
                </div>
            </div>
        </>
    )
}

export default contactPage;
import React from 'react';
import "./form_style.css";

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : null} </div>
            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" placeholder="City" className="form-control" name="city" autoComplete="off" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Country" className="form-control" name="country" autoComplete="off" />
                    </div>
                    <div className="py-2 col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div className="alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}

export default Form;
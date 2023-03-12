import React from 'react'
import I1 from "./I1.png"
import { Link } from 'react-router-dom';

export default function Rent_Card(props) {
    let { title,Price, rupess,images } = props
    return (

        <div className="Rcard">
            <div className="Rwarpper">
                
                <div className="Rcard_img"><img src={images}></img></div>
            
                <div className="RcardInfo">
                    <h1>{title}</h1>
                   
                    <div className="Raction">
                        <div className="RpriceGroup">
                           
                            <p className="Rprice newPrice">{rupess}{Price}</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import "./view.css";
import CardView from "./cardView";
import v1 from "./images/v1.png"
import v5 from "./images/v5.png"
import v3 from "./images/v3.png"
import v4 from "./images/v4.png"
import o1 from "./images/o1.png"
import o2 from "./images/o2.png"
import o3 from "./images/o3.png"
import o4 from "./images/o4.png"
import o14 from "./images/o14.png"
import o16 from "./images/o16.png"
function View() {
    return (
        <div className="viewcontainer">
            <div className="row">
        <CardView
          title="Power Weeders"
          images={v1}
          Price="9999"
          rupess="&#x20B9;"
          alt="a"
         
        />
        <CardView
          title="Power Weeders"
          images={v5}
          Price="500"
          rupess="&#x20B9;"
          alt="b"
          
        />
        <CardView
          title="stihl power Weeder"
          images={v3}
          Price="7000"
          rupess="&#x20B9;"
          alt="c"
         
        />
        <CardView
          title="Lawn Mowers"
          images={v4}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o1}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o2}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o3}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o4}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={v1}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={v4}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={v5}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={v3}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o1}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o2}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o3}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o4}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={v5}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={v3}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o16}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
         <CardView
          title="Lawn Mowers"
          images={o14}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
            </div>
        </div>
        );
}
export default View;
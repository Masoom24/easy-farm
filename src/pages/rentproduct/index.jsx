import React, {useEffect} from 'react';
import "./rentpage.css";
import Rent_Card from "./rent_card";
//import I1 from "./I1.png"
import p7 from "./p7.png"
import p5 from "./p5.png"
import p6 from "./p6.png"
import p4 from "./p4.png"
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductForRent } from '../../modules/reducer/productReducer';
import { productData } from '../../modules/selectors/product';

function Rentproduct() {
  const allProductData = useSelector(productData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductForRent({}))
  },[])
  console.log("========>" , allProductData)
    return (
      <div className="viewcontainerR">
        <div className="rowR">
          {
            allProductData.map((value,index) => <Rent_Card
            key={index}
            title={value.productName}
            images={value.productImage}
            Price={value.productPrice}
            rupess="&#x20B9;"
            alt="a"
           
          />)
          }
{/*         
          <Rent_Card
            title="product 2"
            images={p6}
            Price="500"
            rupess="&#x20B9;"
            alt="b"
            
          />
          <Rent_Card
            title="product 3"
            images={p5}
            Price="7000"
            rupess="&#x20B9;"
            alt="c"
          />
          <Rent_Card
            title="product 4"
            images={p4}
            Price="500"
            rupess="&#x20B9;"
            alt="d"
           
          /> */}
        </div>
      </div>
    );
  }
  export default Rentproduct;
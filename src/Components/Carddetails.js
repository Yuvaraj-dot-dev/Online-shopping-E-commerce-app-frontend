/* eslint-disable jsx-a11y/alt-text */
// import React,{useContext} from "react";
import "../Assets/Styles/style.css";
// import { detailscontext } from "./Home";
import { useParams } from "react-router-dom";
import data from "./productdata";
import Header from "./Header";


const Carddetail = () => {
  let {name} = useParams();
  // const dataCart = useContext(detailscontext);
  // console.log(typeof dataCart);
    const product = data.find(product=>String(product.name) === name)
    const discountPrice = product.originalprice - (product.percentage * product.originalprice) / 100;
        return  (<>
        <Header />
        <div className="cd-prnt">
        <div className="left-container">
            <img src={product.img} alt="moto"></img>
        </div>
        <div className="right-container">
        <div Style="display:flex;align-items:baseline;gap:10px">
        <h4>₹{Number(discountPrice.toPrecision(2) - 1)}</h4>
        <h5>{product.percentage}% Off</h5> {/* Discount percentage */}
        <h6>₹{product.originalprice}</h6> {/* Price display */}
      </div>
      <p>{product.name}</p> {/* Product name */}
      <div className="cd-colors-prnt">
        <ul className="ul-colors">
          <li>
            <button className="color-btn" type="type" ></button>
            <button className="color-btn" type="type" ></button>
            <button className="color-btn" type="type" ></button>
          </li>
        </ul>
        <div className="colors-name">{product.color}</div>
      </div>
      <div>{product.ram}</div>
        <div>{product.rom}</div>
        <div>{product.camera}</div>
        <div>{product.display}</div>
        <div>{product.processor}</div>
        {/* <div>{item.ram}</div> */}
        </div>
        
    </div>
    {/* <Home/> */}
    </>)
}

export default Carddetail;
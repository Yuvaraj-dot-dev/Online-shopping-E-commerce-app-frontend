import React, { useEffect, useState} from "react";
import "../Assets/Styles/style.css";
// import { Link } from "react-router-dom";
// import { CiHeart } from "react-icons/ci";
// import { IoHeart } from "react-icons/io5";
// import { GrFavorite } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
// import Header from "./Header";
import { FaCartPlus } from "react-icons/fa6";
// import Carddetail from "./Carddetails";
import data from "./productdata";
import { bindActionCreators } from "redux";
import { connect} from "react-redux";
import { addToCart, onSearch } from "./Actions/Action";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
// import Login from "./Login";
// import SignUp from "./Signup";

const Card = (props) => {
  
  const navigate = useNavigate();
  useEffect(() => {
  }, []);


  
  // const dataList = data.sort(() => Math.random() - 0.5);
  const myDatas =
  data  &&
  data.map((item, index) => {
      // eslint-disable-next-line no-unused-vars
      const {img,name, originalprice, percentage,
        // ram,
        // rom,
        // camera,
        // display,
        // processor,
        // rating,
        color,
      } = item;
      const Style = {
        background: color,
      };
      const discountPrice = originalprice - (percentage * originalprice) / 100;

      const addcartHandler = () => {
        // props.loginState ? window.location.href="./Login.js" : props.addToCart(item)
        // props.addToCart(item) 
        navigate("/Login")
      }

      

      return (
        <div className="link-container">
          <div
            // to={`/Carddetails/${name}`}
            onClick={() => {navigate(`/Carddetails/${name}`)}}
            className="card"
            key={index + 1}
            id={index + 1}
          >
            <div className="card-img-container">
              <img src={img} alt={name} />
            </div>
            <div Style="display:flex;align-items:baseline;gap:10px">
              <h4>₹{Number(discountPrice.toPrecision(2) - 1)}</h4>
              <h5>{percentage}% Off</h5> {/* Discount percentage */}
              <h6>₹{originalprice}</h6> {/* Price display */}
            </div>
            <p>{name}</p> {/* Product name */}
            <div className="colors-prnt">
              <ul className="ul-colors">
                <li>
                  <button className="color-btn" type="type" style={Style} ></button>
                  <button className="color-btn" type="type" style={Style} ></button>
                  <button className="color-btn" type="type" style={Style} ></button>
                </li>
              </ul>
              <div className="colors-name">{color}</div>
            </div>
            <div className="addtocart-prnt">
              <IoMdStar className="IoMdstar" />
              {/* <button
            className="addtocart-btn"
            type="button"
            onClick={() => dispatch(addToCart({img,name, originalprice, percentage,color}))}>
            <FaCartPlus className="FaCartPlus" />
            Add to Cart
          </button> */}
            </div>
          </div>
          <button
            className="addtocart-btn"
            type="button"
            onClick={addcartHandler}>
            <FaCartPlus className="FaCartPlus" />
            Add to Cart
          </button>
        </div>
      );
    });
    // const rondomItems = Math.random(myDatas);
    // const rondomItems = myDatas.sort(() => Math.random() - 0.5);

    const searchFilter = data && data.map((item) => {return item}).filter((item) => {
      // console.log("search.input::",props.search);
      return item.name.toLowerCase().includes(props.search.toLowerCase());
      // console.log("item..name::",item.name);
      // return item.name === props.search
      
    })
    // onSearch("")
    console.log("search", searchFilter)
    const filteredData = searchFilter && searchFilter.map(((item, index) => {
      const {img,name, originalprice, percentage,
        color,
      } = item;
      const Style = {
        background: color,
      };
      const discountPrice = originalprice - (percentage * originalprice) / 100;

      const addcartHandler = () => {
        // props.loginState ? window.location.href="./Login.js" : props.addToCart(item)
        // props.addToCart(item) 
        console.log("props.userData",props.userData);
        props.userData ? console.log("user Logged") : navigate("/Login");
      }

      

      return (
        <div className="link-container">
          <div
            // to={`/Carddetails/${name}`}
            onClick={() => {navigate(`/Carddetails/${name}`)}}
            className="card"
            key={index + 1}
            id={index + 1}>
            <div className="card-img-container">
              <img src={img} alt={name} />
            </div>
            <div Style="display:flex;align-items:baseline;gap:10px">
              <h4>₹{Number(discountPrice.toPrecision(2) - 1)}</h4>
              <h5>{percentage}% Off</h5> {/* Discount percentage */}
              <h6>₹{originalprice}</h6> {/* Price display */}
            </div>
            <p>{name}</p> {/* Product name */}
            <div className="colors-prnt">
              <ul className="ul-colors">
                <li>
                  <button className="color-btn" type="type" style={Style} ></button>
                  <button className="color-btn" type="type" style={Style} ></button>
                  <button className="color-btn" type="type" style={Style} ></button>
                </li>
              </ul>
              <div className="colors-name">{color}</div>
            </div>
            <div className="addtocart-prnt">
              <IoMdStar className="IoMdstar" />
              {/* <button
            className="addtocart-btn"
            type="button"
            onClick={() => dispatch(addToCart({img,name, originalprice, percentage,color}))}>
            <FaCartPlus className="FaCartPlus" />
            Add to Cart
          </button> */}
            </div>
          </div>
          <button
            className="addtocart-btn"
            type="button"
            onClick={addcartHandler}>
            <FaCartPlus className="FaCartPlus" />
            Add to Cart
          </button>
        </div>)
        }))

        // props.onSearch();
    // props.search = props.search? searchFilter : myDatas;
  return (
<>
<Header/>
        <div className="card-container">
         {/* {myDatas}  */}
         {props.search? filteredData : myDatas} 
          {/* Displaying each product card */}
          {/* {rondomItems} */}
        </div>
        </>
  );
};
// export default Card;

const mapStateToProps = (state) => {
  console.log("state",state)
  return {
    cartData: state.cartReducer.cartData,
    search: state.cartReducer.search,
    userData: state.cartReducer.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      addToCart,onSearch
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);




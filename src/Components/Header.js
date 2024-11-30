// import React , {useState} from "react";
import { FiSearch } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import data from "./productdata";
import { bindActionCreators } from "redux";
import { useState } from "react";
import "../Assets/Styles/Header.css";
import { onSearch } from "./Actions/Action";

const Header = (props) => {
  const [account, setAccount] = useState(false);
  // const [accountDetails, setAccountDetails] = useState(props.login);
  const [userDetail,setUserDetail] = useState(props.userData);
  // setAccountDetails(props.signup)
  const arr = userDetail && userDetail.map((item) => {
    return <>
    <span>{item.Name}</span>
    <span>{item.Email}</span>
    </>
  })

  let search = [];
const onSearchText = (event) => {
  search = event.target.value;
  // props.onSearch(search);
}

  const onSearchHandler = () => {
    props.onSearch(search);
    console.log(search);
    // props.onSearch();
    // setTimeout(() => {
    //   props.onSearch("");
    // }, 100);
  }

  return (
    <header>
      <ul>
        <h4>My Website</h4>
        {/* <button className="category">Categery</button> */}
        <select className="category">
        <option>Categery</option>
        <option><button onSelect={() => {}}>Mobiles</button></option>
        <option>Laptops</option>
        <option>Smart watches</option>
      </select>
        <li className="search">
          <div Style="display:flex;justify-content:space-between;width:100%">
            <input
              type="text"
              className="search-input"
              onChange={(event) => {onSearchText(event)}}/>
            <button onClick={onSearchHandler}><FiSearch className="search-icon" /></button>
          </div>
        </li>
        <li className="cart-btn" >
          <Link  to="/Cart">
            <FaCartShopping className="cart-icon" />
            <span Style="margin-left:5px">cart</span>
            {/* Add the number of items in the cart */}
          </Link>
        </li>
        <li className="acnt-btn">
          <button Style="margin-left:5px" onClick={() => {setAccount(true)}}><RiAccountCircleLine className="acnt-icon" />Account</button>
          {/* Add the number of items in the cart */}
        </li>
      </ul>
      {account && <div className="account-container">
        <button className="cls-account" onClick={() =>{setAccount(false)}}>x</button>
        {/* <span>{props.loginState.name}</span> */}
        <span>{arr}</span>

        {console.log("props.signup",props.login)}
        {console.log("props.cartData",props.cartData)}
        {console.log("props.userData",props.userData)}
        </div>}
    </header>
  );
};


const mapStateToProps = (state) => {
  return {
    login: state.cartReducer.login,
    search: state.cartReducer.search,
    userData: state.cartReducer.userData
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSearch
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);

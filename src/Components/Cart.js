import React from "react";
import "../Assets/Styles/Cart.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, removeFromCart } from "./Actions/Action";
import Header from "./Header";


const Cart = (props) => {

  console.log("cart",props.cartData)
  const mydatas = props.cartData && props.cartData.map((item,index) => {
    const discountPrice = (item.originalprice -
        (item.percentage * item.originalprice) / 100);
    const price =  Number(discountPrice).toPrecision(2)-1;
        return (<div className="cart-prnt" key={index+1}>
            <div className="img-container">
              <img src={item.img} alt={item.name}></img>
            </div>
            <div className="product-details">
                <div className="product-n-c">
                  <div className="product-name">{item.name}</div>
                  <div className="product-color">Color : {item.color}</div>
                </div>
                <div className="count-container">
                <div className="count-container-btn">
                  <button className="count-des-btn" onClick={() => {}}>-</button>
                  <p>{props.quantity}</p>
                  <button className="count-ins-btn" type="button"  onClick={() => {props.increment(item.id)}}>+</button>
                </div>
                </div>
                
                <div className="product-p-q">
                {/* <div className="product-price">price: ₹{Number((discountPrice).toPrecision(2)-1)}</div> */}
                <div className="product-price">price:{price} </div>
                {/* <div className="product-price" onClick={() => setprice(price)}>price:{price} </div> */}
                {/* <div className="product-quantity">quantity: 1</div> */}
                <button className="count-ins-btn" type="button" onClick={() => {props.removeFromCart(item.id)}}>Remove</button>
              </div>
            </div>
          </div>)}
        )
    return <>
        <Header/>
        {props.cartData.length < 1 ? <div>Your cart is empty</div> : <>{mydatas}</>}
        {/* {mydatas} */}
    </>
}


// export default Cart;

const mapStateToProps = (state) => {
  console.log("state",state)
  return {
    cartData: state.cartReducer.cartData,
    quantity: state.cartReducer.quantity
    // price: state.cartReducer.price,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeFromCart,increment
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

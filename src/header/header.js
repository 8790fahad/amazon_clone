import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
// import ShoppingBasketIcon from "@material-ui/icons/"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link  } from 'react-router-dom';
import '../css/header.css'
import { auth } from "../Firebase/Firebase";
import { UseStateValue } from '../StateProvider/StateProvider';
const Header= ()=>{
    const [{basket,user}]=UseStateValue()

    const handleAuth =()=>{
        if(auth){
            auth.signOut()
        }
    }

    return(
        <>
        <div className="header">
            <Link to='/'>
            <img 
            
            className="header_logo"
            src={require('../img/amazon.jpg')}
            alt="logo"
            />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user &&'/login'}>
                <div className="header_option" onClick={handleAuth}>
                    <span className="header_optionOne">
                        Hello {!user?"Guest":user.email}
                    </span>
                    <span className="header_optionTwo">
                        {user?"Sign out":"Sign In"}
                    </span>
                </div></Link>
            </div>
            <Link to='order'>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionOne">
                        Returns
                    </span>
                    <span className="header_optionTwo">
                      & Orders
                    </span>
                </div>
            </div>
            </Link>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionOne">
                        Your
                    </span>
                    <span className="header_optionTwo">
                       Prime
                    </span>
                </div>
            </div>
            <Link to='/checkout'>
            <div className="headerOptionBaskey">
                <ShoppingBasketIcon />
                <span className="header_optionTwo_BasketCount">
                       {basket?.length}
                    </span>
            </div>
            </Link>
        </div>
        </>
    )
}
export default Header
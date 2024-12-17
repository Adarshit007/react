import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * header
 *  -Logo
 * - NAV Items
 * body 
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - image
 *       -name,star,cuisine,delivery time
 * Footer
 * -links
 * -copyright
 * -Address
 * -Contact
 */

const Header= () =>{
    return(
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt='logo'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>  
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
 
const RestaurantCard =(props)=>{
    const {resName,cuisine} = props;
    return(
        <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className='res-logo'
            alt='res-logo' 
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dlgdvmimdir78hpjaxc5'/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body =()=>{
    return(
        <div className='body'>
            <div className='search'>  
                Search
            </div>
            <div className='restaurant-container'>
                <RestaurantCard resName='Meghna Food'cuisine='Biryani,North Indian,Asian'/>
                <RestaurantCard resName="KFC" cuisine='Burger,Fast-food'/>
            </div>
        </div>
    )
}



const AppLayout= ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); 
root.render(<AppLayout/>);
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
                <img className='logo' 
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt='logo'/>
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
    const {resData} = props;
    console.log(props);
    
    return(
        <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className='res-logo'
            alt='res-logo' 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo/100} </h4>
            <h4>{resData.info.deliveryTime}minutes </h4>
        </div>
    )
}

const  resObj ={
"info": {
"id": "656392",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/028cd410-8376-4db2-aae3-0a34de711943_656392.JPG",
"locality": "1st Block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.3,
"parentId": "2",
"avgRatingString": "4.3",
"totalRatingsString": "3.2K+",
"sla": {
"deliveryTime": 18,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-20 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/Bolt%20Listing%20badge@3x.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Sandwiches.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "bolt/Bolt%20Listing%20badge@3x.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Sandwiches.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-56388da5-15a1-4f84-9bbb-5cca555ee8f1"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
"type": "WEBLINK"
}
}

const Body =()=>{
    return(
        <div className='body'>
            <div className='search'>  
                Search
            </div>
            <div className='restaurant-container'>
                <RestaurantCard resData={resObj}/> 
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
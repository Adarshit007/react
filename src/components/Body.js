import RestaurantCard from "./RestaurantCard"
import resList from "./utils/mockData"


const Body =()=>{

    let listOfRestaurants =[
        {
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
        {   
            "info": {
        "id": "656397",
        "name": "kfc",
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
        "avgRating": 4.0,
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
        {
            "info": {
        "id": "656389",
        "name": "dominos",
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
        "avgRating": 3.7,
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
        }];

    return(
        <div className='body'>
            <div className='filter'>  
                <button className='filter-btn' onClick={()=>{
                   //filter logic here
                   listOfRestaurants = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 3.8);
                   console.log(listOfRestaurants );
                   
                }} 
            
                > Top Rated Restaurants </button>
            </div>
            <div className='restaurant-container'>{ 
                listOfRestaurants.map(restaurant=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body
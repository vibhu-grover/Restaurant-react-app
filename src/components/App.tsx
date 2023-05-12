import React from "react";
import NavigationMenu from "./NavigationMenu";
import Container  from "react-bootstrap/Container";
import Home from "./Home";
import About from "./About";
import imageUrls from "./data/image-sources";
import LoadingIndicator from "./common/LoadingIndicator";
import Rating from "./common/Rating";
import RestaurantsListItem from "./Restaurants-List/RestaurantsListItem";
import IRestaurant from "../model/IRestaurant";
import RestaurantsList from "./Restaurants-List/RestaurantList";
import RestaurantDetails from "./common/Restaurant-details/RestaurantDetails";

const restaurant : IRestaurant={
    
        "id": 1,
        "name": "Mad About Pizza",
        "description": "Delicious pizzas baked in wood-fired oven. We serve authentic Italian varieties, classic American pizzas, and desi ones too!",
        "cuisines": [
          "Italian",
          "American",
          "Fusion"
        ],
        "opens": "11:00",
        "closes": "23:30",
        "rating": 4.1,
        "numRatings": 125,
        "costForTwo": 600,
        "imageUrl": "/images/restaurants/mad-about-pizza/restaurant.jpg"
      
}

const App = () =>{
    return(
        <>
            <NavigationMenu/>
            <Container>
                {/*<Home/>
                <About imageUrls={imageUrls}/>
                <LoadingIndicator size="large" message="Please Wait"/>
                <Rating value={4.3} className='me-2'/>
                4.3(220 ratings)
                <RestaurantsListItem restaurant={restaurant}/>
                <RestaurantsList/>*/}
                <RestaurantDetails/>
            </Container>
        </>
    );
};

export default App;
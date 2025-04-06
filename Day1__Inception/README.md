//Notes:
// if you want to apply inline css int react then you have deaclare a avriable and need to write all stylees inside that and then you can you that varible to put in style tab inside {}
// const styleCards = {
// backgroundColor: "lightblue",
// };
// style={styleCards}

<!-- {/_ Below passing props to component but manually _/} -->
<!-- {/_ <RestaurantCard -->

          <!-- resName="Dominozz " -->
          <!-- cusinses="Pizza" -->
          <!-- rating="4.5" -->
          <!-- address="Akurdi Railway Station" -->
        <!-- /> _/} -->

//dont use indexes as keys. it is bad practice
//always give unique keys to elements
//not using keys(not acceptable) <<<<indexes as key <<<unique id (best practice)

//Config driven UI
/\*

- Header
  Logo
  Nav Links
  Home
  About Us
  Cart
  Body
  search
  RestaurantContainer
  Restaurant Cards
  Img
  Name of Restaurant
  Star Rating
  Cuisine
  Delivery Time
  Footers
  Copyright
  Links
  Address
  Contact
  \*/

--Import/Eports

1. Default Export- We cannot export multiple values
   const name='Swiggy'
   export default name from "App.js"
2. Normal Export- We can export multiple values
   export const name='Amol'
   import {name} from "App.js"

React Hooks- Normal JS utility functions. They are written in react.We can import it from react package
-useState()-superpowerful state variable in react
-useEffect()-

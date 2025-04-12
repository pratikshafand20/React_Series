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
whenerver state changes the react will re-render the component

//whenever state variable changes react triggers the reconcilliation cycle(re-render the component)

-useEffect()-
if dependency array is not present= then useEffect hook will be called on every render

If dependecny array is empty-->[]= useeffect is called on initial render and only once

if dependency array is present[btnName]= useEffect called everytime btnName is updated

useEffect(() => {
console.log("use effect called");
}, [btnNameReact]);

-Conditional rendering

//Best practices for useEffect and useState

-never create state variables outside functional component othervise it will show error invalid hook

-Always call it on top
-never create state variable inside condition, for loop or function

//Episode 7- findind the Path - Key Learnings
*React Router DOM
*How to navigate from one page to other page
*Router provider
*Outlet Component
*How to create childern routes
*Error Router
*useRouter Hook
*Routing Types
*How to create dynamic components using the id
*Link component

Routing:
Client Side routing-whenever website loads first time it loads all info, it is stored in browser cache and when we nvigate to any other page then it just rendered from cache not from server. No more n/w calls are required

Server side routing-you make a n/w call for any page and page is come from server and then rendere rendered by browser

single page application: It is single page and components inside it are chaging via client side routing

-const { resId } = useParams();
//this params hook gives the unique id from API URL automatically and based on that id we are making resto menu as dynamic which displays the details page depending on the dish

const { resId } = useParams();

Link Component- It is superpower given by react router dom. work as anchor tag. It is used to navigate from one page to other page. But does not refreshes/reloads the page as anchor tag.

It just loads the content without refreshing. At the end when we see element when page is rendered that time link tag is repalced by anchor tag

Here react router dom itself convert the link--><a> anchor tag as browser does not understands the link as it is not actual js or html

Outlet Component- it used to wrap all the child element inside it. At the end when browser renders the page outlet component replaced by actual HTML content

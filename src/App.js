import ButtonComponent from "./components/button/function/button-component";
import ButtonComponent1 from "./components/button/classs/button-component";
import OrderedList from "./components/list/ordered-list";
import UnorderedList from "./components/list/unordered-list";
import TableComponent from "./components/table/class/table-component";
import ImageComponent, { ImageComponent1 } from "./components/image/function/Image-component";
import BasicExample from "./components/bootstrap/cards/cards";
import TextComponent from "./components/text/class/Text-component";
import TableBootstrap from "./components/bootstrap/cards/Tables";
import FormExample from "./components/bootstrap/cards/Forms";

import FlexCards from "./components/bootstrap/cards/FlexCards";
import NavComponent from "./components/bootstrap/Nav";
import ShowDate from "./components/date/ShowDate";
import TablePropsComponent from "./components/table1/Tableprops";
import ButtonComp from "./components/random-color-btn/Button";
import YoutubeButton from "./components/YoutubeButton/YoutubeBtn";
import ListRender from "./components/employeeList/employeelist";
import UncontrolledExample from "./components/bootstrap/carousel/carousel";
import DemoCarousel from "./components/react-carousel/carousel";
import Header from "./components/Productstore/header";
import ProductsComponent from "./components/fakestoreapi/Products";
import ApiComponent from "./components/fakeStoreApi1/fakestore";
import Timer from "./components/timer/Timer";
import AddCarousel from "./components/addcarouselImage/carouselImage";
import EmployeeTable from "./components/employeeList/employeelist";
import Circle from "./components/circle/circle";
import Uncontrolled from "./components/forms/uncontrolled-component/uncontrolled";
import LoginScreen from "./components/pages/loginScreen";
import RegistrationScreen from "./components/pages/signupScreen";
import InvalidScreen from "./components/pages/invalidScreen";
import ForgotPasswordScreen from "./components/pages/forgotPassword";
import Controlled from "./components/forms/controlled/controlled";
import Todo from "./components/todo/todo-list";


function App() {

  // function getday(day){
  //   switch(day){
  //     case 0:
  //       return "sunday"
  //     case 1:
  //       return "monday"
  //     case 2:
  //       return "tuesday"
  //     case 3:
  //       return "wednesday"
  //     case 4:
  //       return "thursday"
  //     case 5:
  //       return "friday"
  //     case 6:
  //       return "saturday"
  //     default:
  //       return"none"
        
  //   }
  //  }


  //  function greeting(time){
  //   if(time>=0 && time<=11){
  //     return "Good Morning"
  //   }
  //   else if(time>11 && time<=15){
  //     return "good afternoon"
  //   }
  //   else if(time>15 && time<=20){
  //     return "Good evening"
  //   }
  //   else if(time>20 && time<=24){
  //     return "good night"
  //   }
  //   else{
  //     return "none"
  //   }
  //  }


  // function month(month){
  //   switch(month){
  //     case 0:
  //       return "january"
  //     case 1:
  //       return "febraury"
  //     case 2:
  //       return "march"
  //     case 3:
  //       return "april"
  //     case 4:
  //       return "may"
  //     case 5:
  //       return "june"
  //     case 6:
  //       return "july"
  //     case 7:
  //       return "august"
  //     case 8:
  //       return "september"
  //     case 9:
  //       return "october"
  //     case 10:
  //       return "november"
  //     case 11:
  //       return "december"

  //     default:
  //       return "none"
  //   }
  // }



  return (
    <div>
      {/* <ShowDate user={"Gunasairam"} day={getday(new Date().getDay())} greet={greeting(new Date().getHours())} month={month(new Date().getMonth())} year={new Date().getFullYear()}/>

     <ButtonComp />
     <ButtonComp />
     <ButtonComp />
     <ButtonComp />
     <ButtonComp />
     <ButtonComp />
     <ButtonComp />
     <ButtonComp />
     <ButtonComp />
     <ButtonComp />

     <YoutubeButton/>

     <ListRender/> */}

     {/* <ProductsComponent/> */}
     {/* <ApiComponent/> */}
     {/* <AddCarousel/> */}
     {/* <Timer/> */}
     {/* <EmployeeTable/> */}
     {/* <Uncontrolled/>
     <Circle/> */}
     {/* <Header/> */}
     {/* <DemoCarousel /> */}

     {/* <UncontrolledExample/> */}

     {/* <Timer/> */}
     {/* <Uncontrolled/> */}
     {/* <Controlled/> */}
     <Todo/>

    </div>
  );
}

export default App;

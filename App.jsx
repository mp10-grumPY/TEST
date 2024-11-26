
import './App.css'
import Header from './Header'
import Footer from './footer';
import Card from './Card';
import Button from './Button/Button';
import Student from './Student';
import LoginCheck from './LoginCheck';
import List from './List';
import ClickCounter from './ClickCounter';
import MyComponent from './UseState';
import MyComponent2 from './OnChangeEvent';
import MyComponent3 from './UpdFunction';
import MyComponent4 from './UpdObjInState';
import MyComponent5 from './UpdArrayInState';
import MyComponent6 from './UpdArrayObjInState';
import ToDoList from './ToDoList';


function App() {

  const fruits = [
    {id:1, name: "apple", calories:95}, 
    {id:2, name: "orange", calories:45}, 
    {id:3, name: "banana", calories:105 }, 
    {id:4, name: "coconut", calories:150}
];

const vegetables = [
  {id:5, name: "potatoes", calories:110}, 
  {id:6, name: "celery", calories:15}, 
  {id:7, name: "carrots", calories:25 }, 
  {id:8, name: "corn", calories:63}
];

  return(

    
    <>

    <Header/>
    <Footer/>
 
   

  
    </>
  );

}

export default App

//PROPS
//  <Student username="Spongebob" age="21" isJobless={true}/>
//  <Student username="Patrick" age="25"  isJobless={false}/>
//  <Student/>

//-------------------------------------------------------------

// CONDITIONAL RENDER
// <LoginCheck isLoggedIn={false} />

//-------------------------------------------------------------
//ARRAYS
//{fruits.length > 0 && <List items={fruits} category="FRUITS"/>  }
//{vegetables.length >0 ?  <List items={vegetables} category="VEGETABLES"/> : null }
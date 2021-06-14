import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import TodoList from "./components/TodoList";
import AllUsersI from "./components/AllUsers-I";
import AllUsersII from "./components/AllUsers-II";



function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Nav />
      <Route exact path="/" component={TodoList} />
      <Route exact path="/allusers1" component={AllUsersI}/>
      <Route exact path="/allusers2" component={AllUsersII} />
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

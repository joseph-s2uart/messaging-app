// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{user}, dispatch]  = for naming every single components inside react)
    <div className="App"> 
      
         {!user ?(
            <Login />
         )
         : (
        <div className="app_body">
          <Router>
          <Sidebar/>
           <Switch>
           <Route path="/rooms/:roomId">
           <Chat/>
          </Route>
          <Route path="/">
            <Chat />
          </Route>
          </Switch>
          </Router>
        </div>
         )}
    </div>
  );
}

export default App;

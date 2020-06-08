
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import LoginForm from './components/Login';
import Workspace from './components/Workspace';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Counter from './components/Counter';


// redux part -- redux store, reducer , initial state
import { createStore } from 'redux';

import store from './components/redux/store';
import { Provider } from 'react-redux';


// const initialState = {
//   count:0
// }


// function reducer(state = initialState, action){
//   console.log(state);
//   switch(action.type){
//     case "INCREMENT":
//       return {
//         count:state.count + 1
//       };
//     case "DECREMENT":
//       return {
//         count:state.count - 1
//       };
//     default:
//       return state;
//   }
// }


// const store = createStore(reducer);


/////////////////

// our system with all the routes defined

class App extends React.Component{
  
  
  shouldComponentUpdate(){
    console.log("inside should compomnent update");
    return true;
  }

  componentDidMount() { 
    // setTimeout(()=>{
    //   alert("Want to learn more \n Sign Up Now !! ")
    // }, 5000);
    return console.log(" returning DiD Mount");
  }
  
  componentWillUnmount() { 
    console.log("component will unmount");
  }
  
  render(){
    return(

      <BrowserRouter>
        <div>
            { console.log("in app component") }
          <Switch>

            <Route exact path="/" component={ Welcome }/>
            <Route path="/login" component={ LoginForm } />
            <Route path="/workspace" component={ Workspace } />
            <Route path="/signup" component={ Signup } />
            <Route path="/counter" component={ Counter } />
            <Route path="/about" component={ ()=>{
              return (
                <a href ='www.google.com'>
                  Contact @ Google.com
                </a>
                );
              } 
            } />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

const render = (<Provider store={store}>
  <App />
  </Provider>
  );

ReactDOM.render(render
  ,document.getElementById('app'));

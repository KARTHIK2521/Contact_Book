import React from 'react'
import Contact from './component/contact/Contact';
import Navbar from './component/Navbar';
import './mystyle/App.scss';
import {Provider, provider} from 'react-redux'
import store from './store';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AddContact from './component/contact/AddContact'
import EditContact from './component/contact/EditContact'





function App() {
  return (
    
    <Provider store={store}>
     <Router>
      
     <div className="App">
      
        <Navbar /> 
        
      
      <div className="container">
           <div className="py-3">

             <Switch>

               <Route exact path="/" component={Contact} />
               <Route exact path="/contact/add" component={AddContact} />
               <Route exact path="/contact/edit/:id" component={EditContact} />
             
             </Switch>
              
           </div>
      </div>
    
    </div>

     </Router>
    </Provider>
  );
}

export default App;

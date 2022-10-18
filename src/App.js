import { useEffect, useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ProfileScreen from "./ProfileScreen";
import RegistrationScreen from "./RegistrationScreen";
import LayoutRoute from './LayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';
import LoginScreen from './LoginScreen';

import {UserContext} from './UserContext';
import ContactScreen from './ContactScreen';
import FeatureScreen from './FeatureScreen';
import PythonScreen from './PythonScreen';
import JavaScreen from './JavaScreen';
import JavaScriptScreen from './JavaScriptScreen';
import SqlScreen from './SqlScreen';
import CheckoutScreen from './CheckoutScreen';

function App() {

  const { jsonwebtoken, updateUser } = useContext(UserContext);

  useEffect(
    function() {
      // fetch function
      fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`,{
        "method": 'POST',
        "headers": {
            //"Content-Type": "multipart/form-data"
            'Authorization' : `Bearer ${localStorage.getItem('jsonwebtoken')}`,
        }
      })
      // Convert the JSON string to an object
      .then(
          (response) => response.json()
      )

      // If Promise was successful
      .then(
          (response) => {              
              // Turn off preloader and reveal success message
              updateUser(
                {
                  "firstName": response.message.firstName,
                  "lastName": response.message.lastName,
                  "email": response.message.email,
                  "password": response.message.password,
                  "avatar": response.message.avatar,
                  "phone": response.message.phone,
                  "jsonwebtoken": jsonwebtoken || response.message.jsonwebtoken
                }
              )
          }
      )

      // If Promise was not fulfilled
      .catch(
          (e) => {
              console.log({e: e})
              // Turn off preloader and reveal error message
          }
      )
    }, []
  )

  return (
      <BrowserRouter>
          <Switch>
            <LayoutRoute path="/" component={HomeScreen} exact={true} />
            <LayoutRoute path="/about" component={AboutScreen} exact={true} />
            <PrivateLayoutRoute path="/profile" component={ProfileScreen} exact={true} />
            <LayoutRoute path="/registration" component={RegistrationScreen} exact={true} />
            <LayoutRoute path="/login" component={LoginScreen} exact={true} />
            <LayoutRoute path="/contact" component={ContactScreen} exact={true} />
            <LayoutRoute path="/features" component={FeatureScreen} exact={true} />
            <LayoutRoute path="/python" component={PythonScreen} exact={true} />
            <LayoutRoute path="/java" component={JavaScreen} exact={true} />
            <LayoutRoute path="/javascript" component={JavaScriptScreen} exact={true} />
            <LayoutRoute path="/sql" component={SqlScreen} exact={true} />
            <LayoutRoute path="/checkout" component={CheckoutScreen} exact={true} />

          </Switch>
      </BrowserRouter>
  );
}

export default App;
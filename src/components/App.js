import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import LandingPage from './Landing'
import NavigationBar from './shared/Navigation'
class App extends React.Component {
  render() {
    return (
        <Router>
            <NavigationBar/>
        <Route exact path={"/"} component={LandingPage}/>
        </Router>
    )
  }
}
export default App;


import React from 'react';
import LandingPage from './Landing'
import NavigationBar from './shared/Navigation'
class App extends React.Component {
  render() {
    return (
        <div>
        <NavigationBar/>
        <LandingPage/>
        </div>
    )
  }
}
export default App;


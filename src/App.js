import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Blogdetails from './Blogdetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (

    <Router> 
     
    <div className="App">
      <div className="container_1">
        <Navbar />
       <div className='content'>
       <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
       <Route exact path="/create">
        <Create/>
       </Route>
       <Route exact path="/blog/:id">
        <Blogdetails/>
       </Route>
       </Switch>
     </div>
    
    </div>
    </div>
    </Router>
  );
}

export default App;
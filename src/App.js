import { 
  BrowserRouter as Router, Route, Switch
 } from "react-router-dom";
import Layout from "./Components/Layout";
import {
   About,Details,Home,List,NotFound ,Create
  } from "./Pages";

function App() {
  return (
    <div className='content' >
      <Router>
        <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/create' component={Create}/>
          <Route path='/list' component={List} />
          <Route path='/:details_id' component={Details}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Dashboard from './Pages/Dashboard';
import {Menu} from './components/menu/menu';
import { Container } from './components/container/container';
import { MakeApppointments } from './components/make-apppointments/make-apppointments';




function App() {
    return (
        <div className='format'>

            
            <Router>
            <Menu/>
                <Switch>
                    <Route exact path="/" component={Container}></Route> 
                    <Route path="/appointments" component={MakeApppointments}></Route>
                    

                </Switch>
            </Router> 
            {/* <Menu/>
            <Container/>  */}
        </div>
    );
}

export default App;

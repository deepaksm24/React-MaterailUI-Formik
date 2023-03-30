import './App.css';
import { Route, Switch } from 'react-router-dom';
import BaseApp from './components/base';
import Teachers from './teachers';
import Students from './components/students';
import Studentview from './components/studentview';
import Addteacher from './components/addteacher';
import Addstudent from './components/addstudent';
import Teacherview from './components/teacherview';
import Studentedit from './components/studentedit';
import Teacheredit from './components/teacheredit';
import { Nopage } from './components/nopage';
import { Admin } from './ADMIN';



function App() {

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Admin/>
        </Route>

        <Route path="/teachers">
          <Teachers />
        </Route>

        <Route path="/students">
          <Students />
        </Route>

        <Route path="/student/:id">
          <Studentview/>
        </Route>

        <Route path="/editstudent/:id">
          <Studentedit/>
        </Route>
        
        <Route path="/editteacher/:id">
          <Teacheredit/>
        </Route>

        <Route path="/teacher/:id">
         <Teacherview/>
        </Route>
        <Route path="/addteacher">
         <Addteacher/>
        </Route>

        <Route path="/addstudent">
         <Addstudent/>
        </Route>

        <Route path = "**">
           <Nopage/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;

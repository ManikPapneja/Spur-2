import Header from './components/Header/Header';


import Footer from './components/Footer/Footer';
import StoryShare from './components/Share/Share';

import CardCollection from './components/Card/CardCollection';
import Sidebar from './components/Drawer/Sidebar';

import { BrowserRouter as Router, Route, Switch, Link   } from "react-router-dom";
import ShareHeader from './components/Share/ShareHeader';
import CardCollectionEng from './components/Card/CardCollectionEng';
import CardCollectionExam from './components/Card/CardCollectionExam';
import CardCollectionMed from './components/Card/CardCollectionMed';

import Login from './components/Login/Login';



function App() {
  return (
    <Router >
    <div className="App">
    <Switch>
    

    <Route path='/eng'>
     <Sidebar />
     <CardCollectionEng />
     <Footer />
    </Route>


    <Route path='/exam'>
     <Sidebar />
     <CardCollectionExam />
     <Footer />
    </Route>

    <Route path='/med'>
     <Sidebar />
     <CardCollectionMed />
     <Footer />
    </Route>

    <Route path='/login'>
     <Login />
    </Route>

    <Route path='/'>
     <Sidebar />
     <Header />
     <CardCollection />
     <ShareHeader />
     <StoryShare/>
     <Footer />
    </Route>

      </Switch>
     
    </div>
    </Router>
  )
}

export default App;

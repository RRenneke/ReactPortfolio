import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import homePage from "./pages/home";
import portfolioPage from "./pages/portfolio";
import contactPage from "./pages/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
     <Router basename={process.env.PUBLIC_URL}>
       <Nav />
       <Header />
       <Switch>
       <Route exact path="/" component={homePage} />
       <Route exact path="/home" component={homePage} />
       <Route exact path="/portfolio" component={portfolioPage} />
       <Route exact path="/contact" component={contactPage} />
       </Switch>
       <Footer />
     </Router>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

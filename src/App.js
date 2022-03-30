import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Recipe } from "./pages/Recipe";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meals/:name" component={Category} />
          <Route path="/meal/:id" component={Recipe} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

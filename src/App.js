import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import ContactUs from './pages/ContactUs'
function App() {
	return (
		<Router>
		
			<Switch>
				<Route path ="/" component = {Home} exact/>
				<Route path ="/contactus" component = {ContactUs} exact/>
			</Switch>
		</Router>
	);
}

export default App;

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import BlogsScreen from './screens/BlogsScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/blogs" component={BlogsScreen} exact />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

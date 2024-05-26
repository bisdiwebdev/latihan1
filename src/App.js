import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pricing-table">
      <div className="pricing-plan featured">
        <h3>Pro Plan</h3>
        <h2 className="price">$29</h2>
        <ul className="features">
          <li>All Features Included</li>
          <li>5 Users</li>
          <li>Priority Support</li>
        </ul>
        <button>Sign Up Now</button>
      </div>
      </div>
    </div>
  );
}

export default App;

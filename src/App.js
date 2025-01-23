import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

function App() {
  // State variables
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState('small');
  const [contactInfo, setContactInfo] = useState('');
  const [orderIsSubmitted, setOrderIsSubmitted] = useState(false);

  // Event handlers
  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const selectSize = (e) => setSize(e.target.value);
  const updateContactField = (e) => setContactInfo(e.target.value);
  const submitOrder = (e) => {
    e.preventDefault();
    setOrderIsSubmitted(true);
  };
  return (
    <div className="app-container">
      <header>
        <h1>Place an Order</h1>
        </header>
      <main className='main-content'>
          <div className='selection-message'>
            <p>
              Your selection: {size} {pepperoniIsChecked ? 'pepperoni' : 'cheese'}
            </p>
          </div>
        <form onSubmit={submitOrder} className="pizza-form">
          <div className="form-section">
            <h3>Toppings</h3>
            <div className='topping-select'>
            <input
              type="checkbox"
              id="pepperoni"
              checked={pepperoniIsChecked}
              aria-checked={pepperoniIsChecked}
              onChange={togglePepperoni}
            />
            <label htmlFor="pepperoni">Add pepperoni</label>
            </div>
          </div>
          <div className="form-section">
            <h3>Size</h3>
            <label htmlFor="select-size">Select size: </label>
              <select id="select-size" value={size} onChange={selectSize}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
          </div>
          <div className="form-section">
            <h3>Contact Info</h3>
              <label htmlFor="email">Enter your email address: </label>
              <input
                type="text"
                value={contactInfo}
                id="email"
                placeholder="email address"
                onChange={updateContactField}
              />
            </div>
          <div className="form-section">
            <button type="submit" className='submit-button'>Submit Order</button>
          </div>
        </form>
          {orderIsSubmitted && (
              <div className="thank-you-message">
                <h2>Thanks for your order!</h2>
              </div>
            )}
        </main>
    </div>
  );
}
export default App;
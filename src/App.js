import './App.css';
import React, { useState } from 'react';
import Button from './Button'; // Import the child component

function App() {
  // Separate state for each button's background color
  const [button1Color, setButton1Color] = useState('#ffffff');
  const [button2Color, setButton2Color] = useState('#ffffff');

  // Function to generate a random color
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  // Change color for Button 1
  const changeButton1Color = () => {
    setButton1Color(generateRandomColor());
  };

  // Change color for Button 2
  const changeButton2Color = () => {
    setButton2Color(generateRandomColor());
  };

  return (
    <div className="App">
      {/* Header and Button 1 */}
      <h1>Button 1</h1>
      <Button
        backgroundColor={button1Color}
        onClick={changeButton1Color}
        label="Change Color"
      />

      {/* Header and Button 2 */}
      <h1>Button 2</h1>
      <Button
        backgroundColor={button2Color}
        onClick={changeButton2Color}
        label="Change Color"
      />
    </div>
  );
}

export default App;
import {useState} from "react";
import './App.css';

function App() {

  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
    const number = event.target.textContent;

    if(display === '0') {
    setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;

    setDisplay(display + ' ' + operator + ' ');
  };

  const handleEqual = () => {
    setDisplay(eval(display))
  };

  const handleDecimal = () => {
   const array = display.split(' ')
   const lastElement = array[array.length - 1]
   if(!lastElement.includes('.')) {
    setDisplay(display + '.');
   }
  }

  const handleClear = () => {
    setDisplay('0');
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
   
        <div
          className="pushable row"
          id="clear"
          onClick={handleClear}
        >
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">AC</span>
        </div>
        
        <div className="pushable" id="seven" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">7</span>
        </div>
        
        <div className="pushable" id="eight" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">8</span>
        </div>
        
        <div className="pushable" id="nine" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">9</span>
        </div>
        
        <div className="pushable" id="divide" onClick={handleOperator}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front orange-front">/</span>
        </div>
        
        <div className="pushable" id="four" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">4</span>
        </div>
        
        <div className="pushable" id="five" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">5</span>
        </div>
        
        <div className="pushable" id="six" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">6</span>
        </div>
                
        <div className="pushable" id="multiply" onClick={handleOperator}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front orange-front">*</span>
        </div>
        
        <div className="pushable" id="one" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">1</span>
        </div>
        
        <div className="pushable" id="two" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">2</span>
        </div>
        
        <div className="pushable" id="three" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">3</span>
        </div>
        
        <div className="pushable" id="add" onClick={handleOperator}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front orange-front">+</span>
        </div>
        
        <div className="pushable" id="zero" onClick={handleNumber}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">0</span>
        </div>
        
        <div className="pushable" id="decimal" onClick={handleDecimal}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">.</span>
        </div>
        
        <div className="pushable" id="equals" onClick={handleEqual}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front orange-front">=</span>
        </div>
        
        <div className="pushable" id="subtract" onClick={handleOperator}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front orange-front">-</span>
        </div>
      </div>
    </div>
  );
}

export default App;

import  { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

 
    const calculateFactorial = (n) => {
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const factorial = useMemo(() => {calculateFactorial(count)}, [count]);
      return (
    <div>
      <h1>useMemo Example</h1>
      <button onClick={increment}>Count: {count}</button>
      <p>
        Factorial of {count} is {factorial}
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default App;

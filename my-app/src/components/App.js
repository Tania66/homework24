import { useState } from "react";
import "./App.css";
import Input from "./Input/Input";
import Text from "./Text/Text";
import Title from "./Title/Title";
function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    console.log(input);
    setInput("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <Input
        handleChange={handleInputChange}
        value={input}
        handleClick={handleClick}
      />
      <Text />
    </div>
  );
}

export default App;

import './App.css';
import Buttons from './Buttons'

function App() {
  return (
    <div className="App">
      <div className='btns'>
        <Buttons bg="blue" size="base" text="My Button Blue"/>
        <Buttons bg="gray" size="base" text="My Button Gray"/>
        <Buttons bg="green" size="base" text="My Button Green"/>
        <Buttons bg="orange" size="base" text="My Button Orange"/>
        <Buttons bg="red" size="base" text="My Button Red"/>
        <Buttons bg="sky" size="base" text="My Button Sky"/>
        <Buttons bg="white" size="base" text="My Button White"/>
        <Buttons bg="dark" size="base" text="My Button Dark"/>
        <Buttons bg="transparent" size="base" text="My Button Transparent"/>
      </div>
      <div className='btns'>
        <Buttons bg="blue" size="big" text="My Button Big"/>
        <Buttons bg="blue" size="small" text="My Button Small"/>
      </div>
      <div className='btns'>
        <Buttons outline="outline" border="red" size="base" text="My Button Outline Red"/>
        <Buttons outline="outline" border="green" size="base" text="My Button Outline Green"/>
      </div>
    </div>
  );
}

export default App;

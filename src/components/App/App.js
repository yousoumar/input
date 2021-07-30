import './App.css';
import Input from '../Input/Input';
import phoneIcon from '../../assets/phone.svg'
function App() {
  return (
    <div  id="app">
      <Input placeholder ="normal input" />
      <Input error placeholder ="error input"/>
      <Input disabled placeholder ="disabled input"/>
      <Input helperText="Some interesting text" placeholder ="with helper text"/>
      <Input helperText="Some interesting text" placeholder ="with helper text and error" error />
      <Input startIcon = {phoneIcon} placeholder ="with start icon"/>
      <Input endIcon = {phoneIcon} placeholder = "with end icon"/>
  </div >
  );
}

export default App;

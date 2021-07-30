import './App.css';
import Input from '../Input/Input';
import phoneIcon from '../../assets/phone.svg'
function App() {
  return (
    <div  id="app">
      <Input />
      <Input error/>
      <Input disabled/>
      <Input helperText="Some interesting text"/>
      <Input helperText="Some interesting text" error />
      <Input startIcon = {phoneIcon}/>
      <Input endIcon = {phoneIcon}/>
  </div >
  );
}

export default App;

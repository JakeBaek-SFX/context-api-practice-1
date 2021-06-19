import {useCounter} from './shared/Context';
import {Display} from './components/Display';
import {Controls} from './components/Controls';
import './App.scss';

function App() {
  const {state, dispatch} = useCounter();
  return (
    <>
      <Display {...state}/>
      <Controls handler={dispatch}/>
    </>
  );
}

export default App;

import SimpleInput from './components/SimpleInput';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div className="app">
      <BasicForm />
    </div>
  );
}

export default App;

// validate the inout 
// 3 ways:
// when submitted
// when the input is losing focus
// on every key stroke
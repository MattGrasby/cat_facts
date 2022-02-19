import './App.css';
import CatFacts from './CatFacts';

function App() {
  console.log("*** RENDER APP ***");
  return (    
    <div className="App">
      <h1>Here is an interesting fact about cats:</h1>
      <p/>
      <CatFacts />
      <p/>
      <hr/>      
    </div>
  );
}

export default App;

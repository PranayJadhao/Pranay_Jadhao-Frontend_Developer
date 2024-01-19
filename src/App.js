import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Social from './Components/Social';
import Products from './Components/Products';
import Roadmap from './Components/Roadmap';
import Tokens from './Components/Tokens';
import Join from './Components/Join';

function App() {
  return (
    <div >
<div>
  <Navbar></Navbar>
</div>
<div>
  <Social/>
</div>
<div>
  <Products/>
</div>
<div>
  <Roadmap/>
</div>
<div>
  <Tokens/>
</div>
<div>
  <Join/>
</div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from "./routes/Home";
import Swap from "./routes/Swap";
// import Staking from "./routes/Staking";
import Faq from "./routes/Faq";


function App() {
  return (
    <BrowserRouter>
    <div className="App bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/staking" element={<Staking />} /> */}
        <Route path="/swap" element={<Swap />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

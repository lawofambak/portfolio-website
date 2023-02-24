import { useState } from 'react';
import Navbar from './scenes/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app bg-dark-blue">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;

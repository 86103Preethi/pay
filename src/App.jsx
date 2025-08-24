import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 mx-auto px-5 md:px-20 py-3 max-w-[1440px] gap-[20px]   w-full">
          <div className="hidden md:block md:w-[240px]">
            <Sidebar />
          </div>
          <main className="flex-1 mt-[152px] md:max-w-[1000px] w-full overflow-auto">
            <AppRoutes  />
          </main>
        </div>
      </div>
    </Router>
  );
}


export default App;

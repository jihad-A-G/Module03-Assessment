import { useState } from 'react'
import './App.css'
import { Outlet,Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="w-screen text-white flex items-center justify-between p-5 text-2xl font-bold leading-4 bg-black">
        <h1>Articles</h1>
        <ul className="text-lg ">
          <li>
            <Link to={`dashboard/articles`}>Dashboard</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default App

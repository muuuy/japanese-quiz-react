import { useState } from 'react'
import { 
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
 } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Hiragana from './pages/Hiragana/Hiragana';
import Katakana from './pages/Katakana/Katakana';
import Study from './pages/Study/Study';

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: 'hiragana',
      element: <Hiragana />,
    },
    {
      path: 'katakana',
      element: <Katakana />,
    },
    {
      path: 'study',
      element: <Study />,
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

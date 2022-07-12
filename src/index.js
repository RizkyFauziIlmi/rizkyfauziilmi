import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Calculator from './components/calculator/Calculator';
import Quiz from './components/quiz/Quiz';
import Recipe from './components/recipe/Recipe';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Projects = React.lazy(() => import('./components/Projects'))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={'dark'} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/project/calculator' element={<Calculator />} />
          <Route path='projects/project/quiz' element={<Quiz />} />
          <Route path='projects/project/recipe' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

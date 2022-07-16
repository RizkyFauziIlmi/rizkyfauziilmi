import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import font 200,300,400,500,600,700,800,900
import "@fontsource/source-code-pro";
import '@fontsource/source-code-pro/200.css'
import '@fontsource/source-code-pro/300.css'
import '@fontsource/source-code-pro/400.css'
import '@fontsource/source-code-pro/500.css'
import '@fontsource/source-code-pro/600.css'
import '@fontsource/source-code-pro/700.css'
import '@fontsource/source-code-pro/800.css'
import '@fontsource/source-code-pro/900.css'


import Calculator from './components/calculator/Calculator';
import Quiz from './components/quiz/Quiz';
import Recipe from './components/recipe/Recipe';
import font from './assets/global/font';
import colorscript from './assets/global/colorscript';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Projects = React.lazy(() => import('./components/Projects'))
root.render(
  <React.StrictMode>
    <ChakraProvider theme={font}>
      <ColorModeScript initialColorMode={colorscript.config.initialColorMode} />
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

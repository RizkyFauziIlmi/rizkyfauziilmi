import React from "react";
import { VStack } from '@chakra-ui/react'
import './App.css'
import Link from "./components/Link";
import Navbar from "./components/NavBar";
import useDocumentTitle from './useDocumentTitle'

function App() {
  useDocumentTitle("Rizky Fauzi Ilmi | Home")

  return(
    <VStack>
      <Navbar />
      <Link />
    </VStack>
  );
}

export default App
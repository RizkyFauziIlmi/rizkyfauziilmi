import React from "react";
import { VStack } from '@chakra-ui/react'
import './App.css'
import Link from "./components/Link";
import Navbar from "./components/NavBar";



function App() {

  return(
    <VStack>
      <Navbar />
      <Link />
    </VStack>
  );
}

export default App
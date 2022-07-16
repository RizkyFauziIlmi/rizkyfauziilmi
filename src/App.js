import React from "react";
import { VStack } from '@chakra-ui/react'
import './assets/global/Global.css'
import Link from "./components/Link";
import Navbar from "./components/NavBar";
import useDocumentTitle from './assets/global/useDocumentTitle'
import { createBreakpoints } from "@chakra-ui/theme-tools";

function App() {
  useDocumentTitle("Rizky Fauzi Ilmi | Home")
  createBreakpoints(
    {
        sm: '40em',
        md: '52em',
        lg: '64em',
        xl: '80em'
    }
  )

  return(
    <VStack>
      <Navbar />
      <Link />
    </VStack>
  );
}

export default App
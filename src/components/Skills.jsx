import React from 'react';
import { VStack  } from '@chakra-ui/react';
import Certificates from './Other/Certificates';
import Timeline from './Other/Timeline';


export default function Skills() {

    return(
        <VStack>
            <Timeline />
            <Certificates />
        </VStack>
    )
}
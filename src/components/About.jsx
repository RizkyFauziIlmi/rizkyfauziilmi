import React from "react";
import { 
    Code, 
    Text,
    ListItem,
    ListIcon,
    List,
    Flex,
    Icon, 
} from '@chakra-ui/react'

import { VscCode } from 'react-icons/vsc'
import { FaCopyright } from 'react-icons/fa'
import Tech from "./Other/Tech";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function About() {
    
    createBreakpoints(
        {
            sm: '40em',
            md: '52em',
            lg: '64em',
            xl: '80em'
        }
    )

    return(
        <React.Fragment>
            <Flex flexDirection={'column'} mt={4} alignItems={['center', 'flex-start', 'flex-start', 'flex-start']} justifyContent={'space-between'} height={'85vh'}>
                <List spacing={1.5}>
                    <ListItem display={'flex'} alignItems={'center'}>
                        <ListIcon as={VscCode} />
                        <Text>This project was made on June 28, 2022</Text>
                    </ListItem>
                    <ListItem >
                        <Flex alignItems={'center'}>
                            <ListIcon as={VscCode} listStylePosition={'inside'} />
                            <Text>Project Dependecies :</Text>
                        </Flex>
                        <pre>
                            <Code 
                                children={`
├── @chakra-ui/icons@2.0.2
├── @chakra-ui/react@2.2.1
├── @chakra-ui/theme-tools@2.0.2
├── @emotion/react@11.9.3
├── @emotion/styled@11.9.3
├── eslint-config-react-app@7.0.1
├── framer-motion@6.3.16
├── react-dom@18.2.0
├── react-icons@4.4.0
├── react-responsive-carousel@3.2.23
├── react-scripts@5.0.1
├── react@18.2.0
├── react-vertical-timeline-component@3.5.2
├── react-clamp-lines@3.0.3
└── vercel@26.0.0
                                   `
                                }
                                p={2}
                                mt={1}                         
                            />
                        </pre>
                    </ListItem>
                    <ListItem display={'flex'} justifyContent={'center'}>
                        
                    </ListItem>
                </List>
                <Flex width={'100%'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Tech />
                    <Flex gap={1} opacity={'50%'} justifyContent={'center'} alignItems={'center'} alignSelf={'center'}>
                        <Icon as={FaCopyright} />
                        <Text>2022 | RIZKY FAUZI ILMI</Text>
                    </Flex>
                </Flex>
                
            </Flex>
        </React.Fragment>
    )
    
}
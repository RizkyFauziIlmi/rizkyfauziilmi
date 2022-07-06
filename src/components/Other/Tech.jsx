import React from "react";
import {
    Breadcrumb,
    Text,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    keyframes,
} from '@chakra-ui/react'

import { FaReact, FaNpm } from 'react-icons/fa'
import { SiChakraui, SiVercel } from 'react-icons/si'

export default function Tech() {
    const circleFrames = keyframes`
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
    `

    const circleAnimation = (direction) => `${circleFrames} 5s linear ${direction} infinite`

    return(
        <Breadcrumb separator="-" textAlign={'center'}>
            <BreadcrumbItem ml={2}>
                <BreadcrumbLink href='https://reactjs.org' target={'_blank'}>
                    <Flex alignItems={'center'} gap={1}>
                        <Flex animation={circleAnimation("reverse")}>
                            <FaReact /> 
                        </Flex>
                        <Text>ReactJS</Text>
                    </Flex>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='https://chakra-ui.com' target={'_blank'}>
                    <Flex alignItems={'center'} gap={1}>
                        <SiChakraui/> 
                        <Text>Chakra UI</Text>
                    </Flex>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='https://www.vercel.com/' target={'_blank'}>
                    <Flex alignItems={'center'} gap={1}>
                        <SiVercel /> 
                        <Text>Vercel</Text>
                    </Flex>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='https://www.npmjs.com/' target={'_blank'}>
                    <Flex alignItems={'center'} gap={1}>
                        <FaNpm/> 
                        <Text>Npm</Text>
                    </Flex>
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}
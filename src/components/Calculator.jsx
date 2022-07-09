import React from "react";
import { Flex } from '@chakra-ui/react'

export default function Calculator() {
    return (
        <React.Fragment>
            <Flex height={'100vh'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                <h1>Calculator</h1>
            </Flex>
        </React.Fragment>
    )
}
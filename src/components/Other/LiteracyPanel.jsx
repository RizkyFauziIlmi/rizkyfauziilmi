import React from "react";

import {
    FormControl,
    FormLabel,
    Badge,
    Flex,
    Icon,
    Text,
    Switch,
    Center,
    Image,
    Box,
    Grid,
    Accordion,
    AccordionPanel,
    AccordionButton,
    AccordionItem,
    GridItem,
    AccordionIcon,
    useToast,
    useBoolean,
} from '@chakra-ui/react'

import { FcAbout, FcApproval } from 'react-icons/fc'

import databese from '../../database/database.json'


export default function LiteracyPanel() {
    const [detail, setDetail] = useBoolean()
    const toast = useToast()
    const id = 'test-toast'

    const handleToast = (icon, title, description, status, duration, isClosable, position, variant) => {
        if (!toast.isActive(id)) {
            toast({
                id,
                icon: icon,
                title: title,
                description: description,
                status: status,
                duration: duration,
                isClosable: isClosable,
                position: position,
                variant: variant
            })
        }
    }

    const handleMappingGrid = (fullName, description, rating) => {
        if (detail) {
            handleToast(<Icon/>, fullName, description, 'info', null, true, 'bottom-left', 'solid')
        } else {
            handleToast(null, fullName, rating, 'info', 2000, true, 'bottom-left', 'left-accent')
        }
    }

    return(
        <React.Fragment>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    {detail 
                        ? <Badge colorScheme={'yellow'} fontSize={'lg'} mb={1} boxShadow={'1px 1px 2px black'}>
                            <Flex gap={1} alignItems={'center'}>
                                <Icon as={FcAbout}/>
                                <Text>DETAIL</Text>
                                <Text fontSize={'xx-small'}>(close required)</Text>
                            </Flex>
                        </Badge> 
                        : <Badge colorScheme={'green'} fontSize={'lg'} mb={1} boxShadow={'1px 1px 2px black'}>
                            <Flex gap={1} alignItems={'center'}>
                                <Icon as={FcApproval}/>
                                <Text>RATING</Text>
                            </Flex>
                        </Badge>
                    }
                </FormLabel>
                <Switch id='email-alerts' onChange={setDetail.toggle}/>
            </FormControl>
            <Accordion defaultIndex={[0]} allowToggle>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                        <Box flex='1' textAlign='left'>
                            <Text fontSize={'lg'}>Novel</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={2}>
                        {databese.novel.map((data) => {
                            return(
                                <GridItem key={data.name}>
                                    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                        <Text textAlign={'center'} fontSize={'sm'}>{data.name}</Text>
                                        <Image src={data.src} width={'100px'} height={'140px'} borderRadius={'5px'} cursor={'pointer'} boxShadow={'md'} onClick={() => {
                                            handleMappingGrid(data.fullName, data.desc, `${data.rate}/10`)
                                        }}/>
                                    </Flex>
                                </GridItem>
                            );
                        })}
                    </Grid>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                        <Box flex='1' textAlign='left'>
                            <Text fontSize={'lg'}>Manga</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={2}>
                            {databese.manga.map((data) => {
                                return(
                                    <GridItem key={data.name}>
                                        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                            <Text textAlign={'center'} fontSize={'sm'} >{data.name}</Text>
                                            <Image src={data.src} width={'100px'} height={'140px'} borderRadius={'5px'} cursor={'pointer'} boxShadow={'md'} onClick={() => {
                                                handleMappingGrid(data.fullName, data.desc, `${data.rate}/10`) 
                                            }} />
                                        </Flex>
                                    </GridItem>
                                );
                            })}
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>
                <Center>
                    <Text fontSize={'x-small'} as={'ins'}>Click Picture to See {detail ? 'Detail Content'  : 'Personal Rating'}</Text>
                </Center>
            </Accordion>
        </React.Fragment>
    );
}

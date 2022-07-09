import React, { useState } from "react";
import useDocumentTitle from '../useDocumentTitle'
import {
    Grid,
    GridItem,
    Flex,
    Text,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    List,
    ListIcon,
    ListItem,
    Button,
    IconButton,
    useBoolean,
} from '@chakra-ui/react'
import { FaCopyright } from 'react-icons/fa'
import { MdCheckCircle, MdFullscreen, MdSettings } from 'react-icons/md'
import NavBar from "./NavBar";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function Projects() {
    const [projecturl, setProjecturl] = useState('calculator')
    const [fullscreen, setFullscreen] = useBoolean()

    useDocumentTitle("Rizky Fauzi Ilmi | Projects")

    createBreakpoints(
        {
            sm: '40em',
            md: '52em',
            lg: '64em',
            xl: '80em'
        }
    )

    const targetIframe = `${window.location.href}/project/${projecturl}`;

    const handleCalculatorUrl = () => {
        setProjecturl('calculator')
    }

    const handleQuizUrl = () => {
        setProjecturl('quiz')
    }

    const handleRecipeUrl = () => {
        setProjecturl('recipe')
    }

    return (
        <React.Fragment>
            <Grid
                templateAreas={[
                    `"header header"
                    "nav main"
                    "nav footer"`,
                    `"nav header"
                    "nav main"
                    "nav footer"`,
                    `"nav header"
                    "nav main"
                    "nav footer"`,
                    `"nav header"
                    "nav main"
                    "nav footer"`,
                ]}
                gridTemplateRows={'max-content 1fr 30px'}
                gridTemplateColumns={'min-content 1fr'}
                boxShadow={'0 0 5px black'}
                h='100vh'
                gap='1'
                fontWeight='bold'
            >
                <GridItem display={fullscreen ? 'none' : 'flex'} pl='2' area={'header'}>
                    <NavBar />
                </GridItem>
                <GridItem display={fullscreen ? 'none' : 'flex'} area={'nav'} overflow={'auto'}>
                    <Accordion allowMultiple allowToggle defaultIndex={[0]}>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <Text fontWeight={'bold'}>IFrame</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <List spacing={3}>
                                    <ListItem display={'flex'} alignItems={'center'}>
                                        <ListIcon as={projecturl === 'calculator' ? MdCheckCircle : MdSettings} color='green.500' />
                                        <Button size={'sm'} onClick={handleCalculatorUrl}>Calculator</Button>
                                    </ListItem>
                                    <ListItem display={'flex'} alignItems={'center'}>
                                        <ListIcon as={projecturl === 'quiz' ? MdCheckCircle : MdSettings} color='green.500' />
                                        <Button size={'sm'} onClick={handleQuizUrl}>Quiz</Button>
                                    </ListItem>
                                    <ListItem display={'flex'} alignItems={'center'}>
                                        <ListIcon as={projecturl === 'recipe' ? MdCheckCircle : MdSettings} color='green.500' />
                                        <Button size={'sm'} onClick={handleRecipeUrl}>Recipe</Button>
                                    </ListItem>
                                    {/* You can also use custom icons from react-icons */}
                                </List>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'bold'}>Image</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </GridItem>
                <GridItem position={fullscreen ? 'unset' : 'relative'} pl='2' area={'main'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <iframe className="iframe" title="main" src={targetIframe} height={'100%'} width={'100%'} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                    </iframe>
                    <IconButton zIndex={1} bottom={5} right={5} position={'absolute'} icon={<MdFullscreen/>} onClick={setFullscreen.toggle} />
                </GridItem>
                <GridItem display={fullscreen ? 'none' : 'flex'} pl='2' area={'footer'}>
                    <Flex width={'100%'} gap={1} opacity={'50%'} justifyContent={'center'} alignItems={'center'} alignSelf={'center'}>
                        <Icon as={FaCopyright} />
                        <Text fontSize={'xs'}>2022 | RIZKY FAUZI ILMI</Text>
                    </Flex>
                </GridItem>
            </Grid>
        </React.Fragment>
    );
}
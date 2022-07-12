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
    useDisclosure,
    Heading, 
    useColorMode,  
    Tooltip, 
    Link, 
    Avatar, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Input,
    VStack,
    Divider,
    InputGroup,
    InputRightAddon,
    UnorderedList,
    Container
} from '@chakra-ui/react'

import { 
    FaCopyright,
    FaGithub, 
    FaInstagram, 
    FaCodepen, 
    FaSearch,
    FaAndroid, 
} from 'react-icons/fa'
import { 
    MdCheckCircle, 
    MdFullscreen, 
    MdSettings 
} from 'react-icons/md'
import { HiChevronDoubleDown } from 'react-icons/hi';
import image from '../assets/image/profile.png'

export default function Projects() {
    const [projecturl, setProjecturl] = useState('calculator')
    const [fullscreen, setFullscreen] = useBoolean()
    const { colorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const isDark = colorMode === 'dark'

    useDocumentTitle("Rizky Fauzi Ilmi | Projects")

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
                    "footer footer"`,
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
                    <Flex alignItems={'center'} height={'max-content'} width={'100%'} justifyContent={['space-between', 'space-between', 'space-between' ,'flex-start']} p={5}>
                        <Flex alignItems={'center'} gap={4} width={'20%'}>
                            <Flex alignItems={'center'} gap={1}>
                                <Avatar name="Rizky Fauzi Ilmi" src={image} border={'1px solid black'} />
                                <Heading size={'md'} fontSize={'md'} fontWeight={'bold'} width={'max-content'}>Rizky Fauzi Ilmi</Heading>
                            </Flex>
                            <Flex gap={2}>
                                <Tooltip hasArrow label="Github" arrowSize={10} fontSize={'sm'} bg={isDark ? 'white' : '#1A202C'}>
                                    <Link href="https://github.com/RizkyFauziIlmi" target={'_blank'}>
                                        <IconButton 
                                            aria-label="my-github-profile"
                                            className="my-github-profile"
                                            icon={<FaGithub />} 
                                            display={['none', 'none', 'flex', 'flex']}
                                        />
                                    </Link>
                                </Tooltip>
                                <Tooltip hasArrow label="Instagram" arrowSize={10} fontSize={'sm'} bg={isDark ? 'white' : '#1A202C'}>
                                    <Link className="my-instagram-profile" href="https://www.instagram.com/fauzirizkyw" target={'_blank'}>
                                        <IconButton 
                                            className="my-instagram-profile"
                                            aria-label="my-instagram-profile"
                                            icon={<FaInstagram />} 
                                            display={['none', 'none', 'flex', 'flex']}
                                        />
                                    </Link>
                                </Tooltip>
                                <Tooltip hasArrow label="Codepen" arrowSize={10} fontSize={'sm'} bg={isDark ? 'white' : '#1A202C'}>
                                    <Link className="my-codepen-profile" href="https://codepen.io/rizkyfauziilmi-the-vuer" target={'_blank'}>
                                        <IconButton 
                                            aria-label="my-codepen-profile"
                                            className="my-codepen-profile"
                                            icon={<FaCodepen />} 
                                            display={['none', 'none', 'flex', 'flex']}    
                                        />
                                    </Link>
                                </Tooltip>
                            </Flex>
                        </Flex>
                        <Flex gap={2} alignItems={'center'} justifyContent={'flex-end'} width={'40%'}>
                            <Button aria-label="button-drawer" textAlign={'center'} ref={btnRef} onClick={onOpen} display={['flex', 'flex', 'none', 'none']}>
                                <HiChevronDoubleDown />
                            </Button>
                        </Flex>
                        <Drawer
                        isOpen={isOpen}
                        placement='top'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                            <DrawerHeader></DrawerHeader>
                            <DrawerBody>
                                <VStack>
                                    <InputGroup>
                                        <Input placeholder='Type here...' />
                                        <InputRightAddon children={<FaSearch />}></InputRightAddon>
                                    </InputGroup>
                                    <Heading width={'100%'} textAlign={'left'} fontSize={'xl'} pt={5}>Contact me</Heading>
                                    <Divider />
                                    <Flex gap={2} flexDirection={'column'} alignItems={'flex-start'} width={'100%'}>
                                        <Link className="my-github-profile" href="https://github.com/RizkyFauziIlmi" target={'_blank'}>
                                            <Flex alignItems={'center'} gap={1.5}>
                                                <IconButton 
                                                    aria-label="my-github-profile"
                                                    className="my-github-profile"
                                                    icon={<FaGithub />} 
                                                />
                                                <Text>Github</Text>
                                            </Flex>
                                        </Link>
                                        <Link className="my-instagram-profile" href="https://www.instagram.com/fauzirizkyw" target={'_blank'}>
                                            <Flex alignItems={'center'} gap={1.5}>
                                                <IconButton 
                                                    aria-label="my-instagram-profile"
                                                    className="my-instagram-profile"
                                                    icon={<FaInstagram />} 
                                                />
                                                <Text>Instagram</Text> 
                                            </Flex>
                                        </Link>
                                        <Link className="my-codepen-profile" href="https://codepen.io/rizkyfauziilmi-the-vuer" target={'_blank'}>
                                            <Flex alignItems={'center'} gap={1.5}>
                                                <IconButton 
                                                    aria-label="my-codepen-profile"
                                                    className="my-codepen-profile"
                                                    icon={<FaCodepen />}  
                                                />
                                                <Text>Codepen</Text>                                     
                                            </Flex>
                                        </Link>
                                    </Flex>
                                    <Heading width={'100%'} textAlign={'left'} fontSize={'xl'} pt={5}><sup>*</sup> Notes</Heading>
                                    <Divider />
                                    <Container opacity={'80%'}>
                                        <Flex alignItems={'center'} gap={1}>
                                            <FaAndroid /> 
                                            <Text>Android user :</Text>    
                                        </Flex>
                                        <UnorderedList>
                                            <ListItem>if any feature doesn't work, change the browser to desktop mode</ListItem>
                                        </UnorderedList>
                                    </Container>
                                </VStack>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button bgColor={'orange.300'} mr={3} onClick={onClose}>
                                Close
                                </Button>
                            </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
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
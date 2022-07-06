import { 
    Flex, 
    Heading, 
    IconButton, 
    useColorMode,  
    useDisclosure, 
    Tooltip, 
    Link, 
    Avatar, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    Input,
    VStack,
    Text,
    Divider,
    InputGroup,
    InputRightAddon,
    ListItem,
    UnorderedList,
    Container
} from "@chakra-ui/react"

import '../App.css'

import React from "react";

import { 
    FaSun, 
    FaMoon, 
    FaGithub, 
    FaInstagram, 
    FaCodepen, 
    FaSearch,
    FaAndroid,
} from 'react-icons/fa'
import { HiChevronDoubleDown } from 'react-icons/hi'

import { createBreakpoints } from '@chakra-ui/theme-tools'
import image from '../assets/image/profile.png'



export default function NavBar() {

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    

    const isDark = colorMode === 'dark'

    createBreakpoints(
        {
            sm: '40em',
            md: '52',
            lg: '64em',
            xl: '80em'
        }
    )

  return(
    <Flex alignItems={'center'} width={'100%'} justifyContent={'space-between'} p={5}>
        <Flex alignItems={'center'} gap={4} width={'20%'}>
            <Flex alignItems={'center'} gap={1}>
                <Avatar name="Rizky Fauzi Ilmi" src={image} border={'1px solid black'} />
                <Heading size={'md'} fontSize={'lg'} width={'max-content'}>Rizky Fauzi Ilmi</Heading>
            </Flex>
            <Flex gap={2}>
                <Tooltip hasArrow label="Github" arrowSize={10} fontSize={'sm'} bg={isDark ? 'white' : '#1A202C'}>
                    <Link href="https://github.com/RizkyFauziIlmi" target={'_blank'}>
                        <IconButton 
                            aria-label="github link"
                            icon={<FaGithub />} 
                            display={['none', 'none', 'flex', 'flex']}
                        />
                    </Link>
                </Tooltip>
                <Tooltip hasArrow label="Instagram" arrowSize={10} fontSize={'sm'} bg={isDark ? 'white' : '#1A202C'}>
                    <Link href="https://www.instagram.com/fauzirizkyw" target={'_blank'}>
                        <IconButton 
                            aria-label="instagram link"
                            icon={<FaInstagram />} 
                            display={['none', 'none', 'flex', 'flex']}
                        />
                    </Link>
                </Tooltip>
                <Tooltip hasArrow label="Codepen" arrowSize={10} fontSize={'sm'} bg={isDark ? 'white' : '#1A202C'}>
                    <Link href="https://codepen.io/rizkyfauziilmi-the-vuer" target={'_blank'}>
                        <IconButton 
                            aria-label="codepen link"
                            icon={<FaCodepen />} 
                            display={['none', 'none', 'flex', 'flex']}    
                        />
                    </Link>
                </Tooltip>
            </Flex>
        </Flex>
        <Flex gap={2} alignItems={'center'} justifyContent={'flex-end'} width={'40%'}>
            <IconButton 
                aria-label="theme button"
                icon={isDark ? <FaMoon /> : <FaSun />} 
                isRound={true} 
                onClick={toggleColorMode} 
                justifySelf={'end'} 
            />
            <Button textAlign={'center'} ref={btnRef} onClick={onOpen} display={['flex', 'flex', 'none', 'none']}>
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
                            <Link href="https://github.com/RizkyFauziIlmi" target={'_blank'}>
                                <Flex alignItems={'center'} gap={1.5}>
                                    <IconButton 
                                        aria-label="github link"
                                        icon={<FaGithub />} 
                                    />
                                    <Text>Github</Text>
                                </Flex>
                            </Link>
                            <Link href="https://www.instagram.com/fauzirizkyw" target={'_blank'}>
                                <Flex alignItems={'center'} gap={1.5}>
                                    <IconButton 
                                        aria-label="instagram link"
                                        icon={<FaInstagram />} 
                                    />
                                    <Text>Instagram</Text> 
                                </Flex>
                            </Link>
                            <Link href="https://codepen.io/rizkyfauziilmi-the-vuer" target={'_blank'}>
                                <Flex alignItems={'center'} gap={1.5}>
                                    <IconButton 
                                        aria-label="codepen link"
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
                    <Button bgColor={'orange.300'} textShadow={'1.5px 1.5px black'} mr={3} onClick={onClose}>
                    Close
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
    </Flex>
  );
}
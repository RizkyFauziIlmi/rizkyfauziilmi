import { 
    Code, 
    Stack, 
    Heading, 
    Flex, 
    useDisclosure, 
    Text, 
    Image, 
    useToast, 
    Button, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    List,
    ListItem,
    ListIcon,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    keyframes,
    Collapse,
    Input,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    IconButton,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Kbd,
    useBoolean,
    FormControl,
    FormLabel,
    Switch,
} from "@chakra-ui/react"

import { createBreakpoints } from '@chakra-ui/theme-tools'

import React, { 
    useState 
} from "react"
import { useEffect } from "react"

import { 
    FaAngleDoubleDown, FaTerminal, FaTools
} from "react-icons/fa"

import { 
    FcCheckmark, 
    FcEngineering, 
    FcSynchronize,
} from 'react-icons/fc'


import profileImage from '../assets/image/profile.jfif'
import LiteracyPanel from "./Other/LiteracyPanel"
import MusicPanel from "./Other/MusicPanel"

export default function Home() {

    const slide = useDisclosure()
    const firstModal = useDisclosure()
    const secondModal = useDisclosure()
    const [init, setInit] = useBoolean()
    const [profile, setProfile] = useBoolean()
    const [hobby, setHobby] = useBoolean()
    const [keepplay, setKeepplay] = useBoolean()
    const [all, setAll] = useBoolean()
    const [type, setType] = useState('')
    const toast = useToast()
    const id = 'test-toast'

    const notAvalaible =(
        <Alert
        status='info'
        variant='solid'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
        borderRadius={'5px'}
        boxShadow={'dark-lg'}
        position={'relative'}
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Compile Warning
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                The function not yet available
            </AlertDescription>
        </Alert>
    )
    const semicolonElement = (
        <Alert
            status='warning'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            borderRadius={'5px'}
            boxShadow={'dark-lg'}
            position={'relative'}
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Typo Warning
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Looks like you forgot to use <Kbd>;</Kbd>
            </AlertDescription>
        </Alert>
    )
    const bracketsElement = (
        <Alert
            status='warning'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            borderRadius={'5px'}
            boxShadow={'dark-lg'}
            position={'relative'}
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Typo Warning
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Looks like you forgot to use <Kbd>(</Kbd> or <Kbd>)</Kbd>
            </AlertDescription>
        </Alert>
    )
    const typoElement = (
        <Alert
            status='warning'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            borderRadius={'5px'}
            boxShadow={'dark-lg'}
            position={'relative'}
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Typo Warning
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Looks like you forgot to use <Kbd>space</Kbd><Kbd>.</Kbd> or some letter <Kbd>abc</Kbd>
            </AlertDescription>
        </Alert>
    )

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

    const handleToastRender = (duration, element) => {
        if (!toast.isActive(id)) {
            toast({
                id,
                duration: 3500,
                render: () => (element)
            })
        }
    }

    const handleType = (event) => {
        setType(event.target.value)
    }

    const handleAll = () => {
        if (init && profile && hobby) {
            setAll.on()
        }
    }

    const handleReset = () => {
        if (all) {
            window.location.reload()
        } else {
            handleToastRender(3000, notAvalaible)
        }
    }

    const keyboardHandle = (e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            const enter = document.querySelector('[aria-label="Execute"]')
            enter.click()
        }
    }

    useEffect(() => {
        handleAll()
        window.addEventListener('keypress', keyboardHandle)
        return () => window.removeEventListener('keypress', keyboardHandle)
    })   

    const handleExecute = () => {
        const result = type.toLowerCase()
        const init = "const user = new programmer();"
        const profile = "user.profile();"
        const hobby = "user.hobby();"
        const reset = "user.reset();"

        const letter = [
            init.split('').filter(char => /[a-zA-Z]/.test(char)), 
            profile.split('').filter(char => /[a-zA-Z]/.test(char)), 
            hobby.split('').filter(char => /[a-zA-Z]/.test(char)), 
            reset.split('').filter(char => /[a-zA-Z]/.test(char))
        ]

        if (result === init) {
            handleInit()
        } else if (result === profile) {
            handleProfile()
        } else if (result === hobby) {
            handleHobby()
        } else if (result === reset) {
            handleReset()
        } else {
            if (result === '') {
                const emptyWarning = (
                    <Alert
                        status='info'
                        variant='solid'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        borderRadius={'5px'}
                        boxShadow={'dark-lg'}
                        position={'relative'}
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Compile Warning
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            please fill in the input!
                        </AlertDescription>
                    </Alert>
                )
                handleToastRender(2000, emptyWarning)
            } else if (!result.endsWith(';') && result.includes('()')) {
                handleToastRender(3000, semicolonElement)
            } else if ( (!result.endsWith(';') && !result.includes('()')) && !result.includes(letter)) {
                handleToastRender(3500, bracketsElement)
            } else {
                handleToastRender(5000, typoElement)
            } 
        }
    }

    const handleInit = () => {
        setInit.on()
        if (init === true) {
            handleToast(null, 'failed to compile!', "object has already been initiated", 'error', 3000, true, 'bottom', 'solid')
        } else {
            handleToast(null, 'Compiled Succsessfully!', "Object Initiated Successfully", 'success', 3000, true, 'bottom', 'solid')
            slide.onOpen()
        }
    }

    const handleProfile = () => {
        if (init) {
            handleToast(null, 'Compiled Succsessfully!', "Code Executed Successfully", 'success', 3000, true, 'bottom', 'solid')
            setProfile.on()
            firstModal.onOpen()
        } else {
            handleToastRender(3000, notAvalaible)
        }
        
    }

    const handleHobby = () => {
        if (init) {
            handleToast(null, 'Compiled Succsessfully!', "Code Executed Successfully", 'success', 3000, true, 'bottom', 'solid')
            setHobby.on()
            secondModal.onOpen()
        } else {
            handleToastRender(3000, notAvalaible)
        }
    }

    const circleFrames = keyframes`
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
    `
    const circleAnimation = (direction) => `${circleFrames} 3s linear ${direction} infinite`

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
            <Stack direction={'column'} width={'100%'} height={'100vh'}>
                <Heading pt={5}>Click or type to Run code</Heading>
                <Flex justifyContent={'space-between'} flexDirection={'column'} height={'90%'}>
                    <List>
                        <ListItem>
                            <ListIcon position={'relative'} as={slide.isOpen ? FcCheckmark : FcEngineering } animation={!init ? circleAnimation('reverse') : ''} />
                                <button onClick={handleInit} >
                                    <Code children='const user = new Programmer();' colorScheme={'yellow'} />
                                </button>
                        </ListItem>
                        <ListItem>
                            <Collapse in={slide.isOpen}>
                                <ListIcon position={'relative'} as={profile ? FcCheckmark : FcEngineering} animation={!profile ? circleAnimation('reverse') : '' } />
                                <button onClick={handleProfile}>
                                    <Code children='user.profile();' colorScheme={'yellow'} />
                                </button>
                            </Collapse>
                        </ListItem>
                        <ListItem>
                            <Collapse in={slide.isOpen}>
                                <ListIcon position={'relative'} as={hobby ? FcCheckmark : FcEngineering} animation={!hobby ? circleAnimation('reverse') : ''} />
                                <button onClick={handleHobby}>
                                    <Code children='user.hobby();' colorScheme={'yellow'} />
                                </button>
                            </Collapse>
                        </ListItem>
                        <ListItem>
                            {all ? <ListIcon position={'relative'} as={FcSynchronize} animation={circleAnimation('normal')} /> : ''}
                            {all 
                                ?   <button onClick={handleReset}>
                                        <Code children="user.reset();" colorScheme={'yellow'}/>
                                    </button>
                                :   <Button
                                        isLoading={all ? false : true}
                                        loadingText='Loading'
                                        colorScheme='teal'
                                        variant='outline'
                                        spinnerPlacement='start'
                                        border={'none'}
                                    >
                                        <Code children="user.reset()" colorScheme={'yellow'}/>
                                    </Button>
                            }
                        </ListItem>
                        <ListItem boxShadow={'dark-lg'} p={5} mt={10} borderRadius={'5px'} width={["100%", "100%", "60vw", "35vw"]} >
                                <InputGroup position={'relative'} mt={2}>
                                    <InputLeftElement children={<FaTerminal />}/>
                                    <Input
                                        focusBorderColor='lime'
                                        placeholder='type the code here!'
                                        _placeholder={{ opacity: 1, color: 'gray.500' }}
                                        color={'yellow'}
                                        onChange={handleType}
                                        colorScheme={'yellow'}
                                        variant={'filled'}
                                    />
                                    <InputRightElement>
                                        <IconButton aria-label="Execute" icon={<FaTools />} onClick={handleExecute} />
                                    </InputRightElement>
                                </InputGroup>
                                <Flex gap={2} pt={2} justifyContent={'flex-end'}>
                                    <Kbd>enter</Kbd> 
                                    <Text fontWeight={'bold'}>Or</Text> 
                                    <Kbd>↩</Kbd>
                                </Flex>
                        </ListItem>
                    </List> 
                </Flex>
                <Modal onClose={firstModal.onClose} isOpen={firstModal.isOpen} isCentered motionPreset={'slideInBottom'}>
                    <ModalOverlay />
                    <ModalContent height={['80vh', '80vh', '80vh', '80vh']} width={['90vw', '100vw', '100vw', '100vw']} overflow={'auto'}>
                        <ModalHeader>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}><FaAngleDoubleDown /><Heading>About Me</Heading></Stack>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'}>
                                <Image src={profileImage} boxShadow={'2px 2px 5px black'} borderRadius={'5px'} />
                                <TableContainer>
                                    <Table variant={'simple'}>
                                        <Tbody>
                                            <Tr>
                                                <Td>Name</Td>
                                                <Td>Rizky Fauzi Ilmi</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Tall</Td>
                                                <Td>178 cm</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Birth</Td>
                                                <Td>June 8<sup>th</sup>, 2004</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Favourite Color</Td>
                                                <Td>Blue</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Favourite Food</Td>
                                                <Td>all food except smelly food</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Flex>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={firstModal.onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>      
                <Modal onClose={secondModal.onClose} isOpen={secondModal.isOpen} isCentered motionPreset={'slideInBottom'}>
                    <ModalOverlay />
                    <ModalContent height={['80vh', '80vh', '80vh', '80vh']} width={['90vw', '100vw', '100vw', '100vw']} overflow={'auto'}>
                        <ModalHeader><Heading>Hobby</Heading></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Tabs isFitted variant='enclosed' isLazy lazyBehavior={ keepplay ? 'keepMounted' : 'unmount'}>
                                <TabList mb='1em' overflowX={'auto'} overflowY={'hidden'}>
                                    <Tab>literacy</Tab>
                                    <Tab >Music</Tab>
                                    <Tab>Film</Tab>
                                    <Tab>Game</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <LiteracyPanel />
                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl display='flex' alignItems='center' p={2}>
                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                <Text fontSize={'x-small'}>Keeps playing music while changing tabs</Text>
                                            </FormLabel>
                                            <Switch id='email-alerts' onChange={setKeepplay.toggle} />
                                        </FormControl>
                                        <MusicPanel />
                                    </TabPanel>
                                    <TabPanel>
                                    <p>three!</p>
                                    </TabPanel>
                                    <TabPanel>
                                    <p>four!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => {
                                secondModal.onClose()
                            }} boxShadow={'dark-lg'}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
        </React.Fragment>
    );
}
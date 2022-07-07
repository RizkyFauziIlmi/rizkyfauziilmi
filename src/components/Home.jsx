import { 
    Code, 
    Stack, 
    Heading, 
    Flex, 
    useDisclosure, 
    Text, 
    useToast, 
    Button, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
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
    Progress,
    ProgressLabel,
    VStack,
    Avatar,
    Container,
    Divider,
    HStack,
    Badge,
} from "@chakra-ui/react"

import { createBreakpoints } from '@chakra-ui/theme-tools'

import React, { 
    useState 
} from "react"
import { useEffect } from "react"

import { FaCat, FaChess, FaCity, FaGuitar, FaJs, FaTerminal, FaTools
} from "react-icons/fa"

import { 
    FcCheckmark, 
    FcEngineering, 
    FcSynchronize,
} from 'react-icons/fc'
import { MdFormatClear } from "react-icons/md"
import { BeatLoader } from "react-spinners"

import profileImage from '../assets/image/profile.png'
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
    const [progress, setProgress] = useState(0)
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

    const handleClearInput = () => {
        setType('')
    }

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

    const handleProgressIncrement = () => [
        setProgress(progress + (100 / 3))
    ]

    const handleInit = () => {
        setInit.on()
        if (init === true) {
            handleToast(null, 'failed to compile!', "object has already been initiated", 'error', 3000, true, 'bottom', 'solid')
        } else {
            handleProgressIncrement()
            handleToast(null, 'Compiled Succsessfully!', "Object Initiated Successfully", 'success', 3000, true, 'bottom', 'solid')
            slide.onOpen()
        }
    }

    const handleProfile = () => {
        if (init) {
            if (init && !profile) {
                handleProgressIncrement()
            }
            handleToast(null, 'Compiled Succsessfully!', "Code Executed Successfully", 'success', 3000, true, 'bottom', 'solid')
            setProfile.on()
            firstModal.onOpen()
        } else {
            handleToastRender(3000, notAvalaible)
        } 
        
    }

    const handleHobby = () => {
        if (init) {
            if (init && !hobby) {
                handleProgressIncrement()
            }
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
                <Flex justifyContent={'space-between'} flexDirection={'column'} height={'90%'}>
                    <List>
                        <ListItem>
                            <ListIcon as={null} />
                            <Code fontSize={'xs'} width={'max-content'} children={"// Click or type to Run code"} />
                        </ListItem>
                        <ListItem>
                            <ListIcon position={'relative'} as={slide.isOpen ? FcCheckmark : FcEngineering } animation={!init ? circleAnimation('reverse') : ''} />
                                <Button height={'unset'} onClick={handleInit} variant={'unstyled'} >
                                    <Code fontSize={'xs'} children='const user = new Programmer();' />
                                </Button>
                        </ListItem>
                        <ListItem>
                            <Collapse in={slide.isOpen}>
                                <ListIcon position={'relative'} as={profile ? FcCheckmark : FcEngineering} animation={!profile ? circleAnimation('reverse') : '' } />
                                <Button height={'unset'} variant={'unstyled'} onClick={handleProfile}>
                                    <Code fontSize={'xs'} children='user.profile();' />
                                </Button>
                            </Collapse>
                        </ListItem>
                        <ListItem>
                            <Collapse in={slide.isOpen}>
                                <ListIcon position={'relative'} as={hobby ? FcCheckmark : FcEngineering} animation={!hobby ? circleAnimation('reverse') : ''} />
                                <Button height={'unset'} variant={'unstyled'} onClick={handleHobby}>
                                    <Code fontSize={'xs'} children='user.hobby();' />
                                </Button>
                            </Collapse>
                        </ListItem>
                        <ListItem>
                            {all ? <ListIcon position={'relative'} as={FcSynchronize} animation={circleAnimation('normal')} /> : <ListIcon position={'relative'} as={FcSynchronize} opacity={0} />}
                            {all 
                                ?   <Button height={'unset'} variant={'unstyled'} onClick={handleReset}>
                                        <Code children="user.reset();" />
                                    </Button>
                                :   <Progress isIndeterminate={progress === 0 ? true : false} hasStripe isAnimated max={100} min={0} colorScheme='green' size='md' value={progress} >
                                        <ProgressLabel textShadow={'1px 1px 2px black'} fontSize={'sm'}>{progress === 0 ? '' : `${Math.floor(progress)}%`}</ProgressLabel>
                                    </Progress>   
                            }
                        </ListItem>
                        <ListItem p={2} boxShadow={'dark-lg'} mt={10} borderRadius={'5px'} width={["100%", "100%", "60vw", "35vw"]} >
                                <InputGroup position={'relative'} mt={2}>
                                    <InputLeftElement children={<FaTerminal />}/>
                                    <Input
                                        placeholder='type the code here!'
                                        _placeholder={{ opacity: 0.5 ,color: 'inherit'}}
                                        onChange={handleType}
                                        variant={'filled'}
                                        value={type}
                                        isRequired
                                    />
                                    <InputRightElement>
                                        <IconButton aria-label="Execute" icon={<FaTools />} onClick={handleExecute} />
                                    </InputRightElement>
                                </InputGroup>
                                <Flex mt={2} fontSize={'xs'} justifyContent={'space-between'}>
                                    <IconButton size={'sm'} spinner={<BeatLoader size={5} />} aria-label="clear-input" isLoading={type === "" ? true : false} icon={<MdFormatClear />} onClick={handleClearInput} />
                                    <Flex gap={2} pt={2} justifyContent={'flex-end'}>
                                        <Kbd>enter</Kbd> 
                                        <Text fontWeight={'bold'}>Or</Text> 
                                        <Kbd>↩</Kbd>
                                    </Flex>
                                </Flex>    
                        </ListItem>
                    </List> 
                </Flex>
                <Modal onClose={firstModal.onClose} isOpen={firstModal.isOpen} isCentered motionPreset={'slideInBottom'}>
                    <ModalOverlay />
                    <ModalContent height={['80vh', '80vh', '80vh', '80vh']} width={['90vw', '100vw', '100vw', '100vw']} overflow={'auto'}>
                        <ModalHeader textAlign={'center'}>
                            <Text fontSize={'2xl'}>Profile</Text>
                        </ModalHeader>
                        <ModalBody>
                            <VStack>
                                <Flex textAlign={'center'} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                    <Avatar size={'lg'} name="Rizky Fauzi Ilmi" src={profileImage} />
                                    <Container>
                                        <Text fontSize={'md'} fontWeight={'bold'}>Rizky Fauzi Ilmi</Text>
                                        <Text fontSize={'xs'}>front end specialist</Text>
                                    </Container>
                                </Flex>
                                <Container pt={10} textAlign={'left'}>
                                    <Text opacity={0.5}>Recent Activities</Text>
                                    <Divider />
                                    <HStack p={2} mt={1} overflow={'auto'}>
                                        <Badge variant={'outline'}>Programming</Badge>
                                        <Badge variant={'outline'} colorScheme='green'>Playing Guitar</Badge>
                                        <Badge variant={'outline'} colorScheme='red'>Reading Books</Badge>
                                        <Badge variant={'outline'} colorScheme='purple'>Watching Movies or Anime</Badge>
                                    </HStack>
                                </Container>    
                                <Container pt={5}>
                                    <Text opacity={0.5}>Favorite Things</Text>
                                    <Divider />
                                    <Container p={2}>
                                        <Flex alignItems={'center'} gap={2}>
                                            <Text fontWeight={'bold'}>Programming Langguage</Text>
                                            <FaJs />
                                        </Flex>
                                        <Flex alignItems={'center'} gap={2}>
                                            <Text fontWeight={'bold'}>Musical Instruments</Text>
                                            <FaGuitar />
                                        </Flex>
                                        <Flex alignItems={'center'} gap={2}>
                                            <Text fontWeight={'bold'}>Animal</Text>
                                            <FaCat />
                                        </Flex>
                                        <Flex alignItems={'center'} gap={2}>
                                            <Text fontWeight={'bold'}>Sport</Text>
                                            <FaChess />
                                        </Flex>
                                        <Flex alignItems={'center'} gap={2}>
                                            <Text fontWeight={'bold'}>Place</Text>
                                            <FaCity />
                                        </Flex>
                                    </Container>
                                </Container>
                            </VStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={firstModal.onClose} boxShadow={'dark-lg'}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>      
                <Modal onClose={secondModal.onClose} isOpen={secondModal.isOpen} isCentered motionPreset={'slideInBottom'}>
                    <ModalOverlay />
                    <ModalContent height={['80vh', '80vh', '80vh', '80vh']} width={['90vw', '100vw', '100vw', '100vw']} overflow={'auto'}>
                        <ModalHeader><Heading>Hobby</Heading></ModalHeader>
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

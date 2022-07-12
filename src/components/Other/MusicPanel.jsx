import {
    Accordion,
    AccordionButton,
    AccordionItem,
    Box,
    AccordionIcon,
    AccordionPanel,
    useToast,
    Icon,
    Text,
    useBoolean,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Flex,
} from '@chakra-ui/react'
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { SiAdblock } from 'react-icons/si'
import { MdGraphicEq, MdVolumeDown, MdVolumeOff, MdVolumeUp } from 'react-icons/md'
import { FiPause, FiPlay } from 'react-icons/fi'

import database from '../../database/database.json'
import ReactPlayer from 'react-player';

export default function MusicPanel() {

    const [volume, setVolume] = useState(0.20)
    const toast = useToast()
    const [play, setPlay] = useBoolean(false)
    const id = "test-toast"

    const volumeIndicator = () => {
        if (volume === 0) {
            return (
                <MdVolumeOff fontSize={'x-large'} cursor={'pointer'} onClick={handleVolumeClick}/>
            )
        } else if (volume > 0 && volume <= 0.30) {
            return (
                <MdVolumeDown fontSize={'x-large'} cursor={'pointer'} onClick={handleVolumeClick}/>
            )
        } else {
            return (
                <MdVolumeUp fontSize={'x-large'} cursor={'pointer'} onClick={handleVolumeClick}/>
            )
        }
    }

    const playPauseIndicator = () => {
        if (play) {
            return (
                <FiPause fontSize={'x-large'} cursor={'pointer'} onClick={setPlay.off}/>
            )
        } else {
            return (
                <FiPlay fontSize={'x-large'} cursor={'pointer'} onClick={setPlay.on}/>
            )
        }
    }

    const handleVolumeClick = () => { 
        if (volume > 0) { 
            setVolume(0)
        }
        else if (volume === 0) {
            setVolume(0.20) 
        }
    }

    const handleToast = (name ,favoriteSong) => {
        if (!toast.isActive(id)) {
            toast({
                id,
                icon: <Icon as={BsMusicNoteBeamed} /> ,
                title: `My Favorite ${name}'s Single`,
                status: "success",
                description: favoriteSong,
                isClosable: true,
                duration: 3000
            })
        }
    }

    return(
        <React.Fragment>
            <Accordion defaultIndex={[0]} allowToggle>
                <AccordionItem isFocusable={true}>
                    <h2>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }} onClick={setPlay.off}>
                        <Box flex='1' textAlign='left'>
                            Local Musicians
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign={'center'}>
                        <Carousel infiniteLoop showThumbs={false} >
                            {database.Artist.local.map((data) => {
                                return(
                                    <div key={data.name}>
                                        <img src={data.image} alt={data.name} style={{ aspectRatio: "16/9" }} />
                                        <p className="legend" style={{ cursor: "pointer" }} onClick={() => {
                                            handleToast(data.name, data.favoriteSong)
                                        }}>{data.name}</p>
                                    </div>
                                )
                            })}
                        </Carousel>
                        <Text fontSize={'x-small'} as={'ins'}>Click Musician Name to See Favorite Single</Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white', }} onClick={setPlay.off}>
                        <Box flex='1' textAlign='left'>
                            Non-Local Musicians
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign={'center'}>
                        <Carousel infiniteLoop showThumbs={false}>
                            {database.Artist.nonlocal.map((data) => {
                                return(
                                    <div key={data.name}>
                                        <img src={data.image} alt={data.name} style={{ aspectRatio: "16/9" }}/>
                                        <p className="legend" style={{ cursor: "pointer" }} onClick={() => {
                                            handleToast(data.name, data.favoriteSong)
                                        }}>{data.name}</p>
                                    </div>
                                )
                            })}
                        </Carousel>
                        <Text fontSize={'x-small'} as={'ins'}>Click Musician Name to See Favorite Single</Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }} onClick={setPlay.toggle}>
                        <Box flex='1' textAlign='left'>
                            Preview
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel position={'relative'} >
                        <Flex flexDirection={'column'} gap={5} textAlign={'center'}>
                            <div style={{ position: 'relative', paddingTop: "56.25%" }}>
                                <ReactPlayer 
                                    url='https://www.youtube.com/watch?v=KAspdjkEN8Y&feature=youtu.be'
                                    playing={play ? true : false}
                                    loop
                                    volume={volume}
                                    width='100%'
                                    height='100%'
                                    style={{ position: 'absolute', top: 0, left: 0}} 
                                />
                            </div> 
                            <Flex gap={2} alignItems={'center'} justifyContent={'center'}>
                                <Flex alignItems={'center'} justifyContent={'flex-end'}>
                                    {playPauseIndicator()}
                                    {volumeIndicator()}
                                </Flex>
                                <Slider aria-label='slider-ex-4' value={volume} defaultValue={volume} min={0} max={1} step={0.01} onChange={(val) => {setVolume(val)}}>
                                    <SliderTrack bg='red.100'>
                                        <SliderFilledTrack bg='tomato' />
                                    </SliderTrack>
                                    <SliderThumb boxSize={6}>
                                            <Box color='tomato' as={MdGraphicEq} />
                                    </SliderThumb>
                                </Slider>
                            </Flex>
                            <Text fontSize={'xx-small'} gap={1} display={'flex'} alignItems={'center'} opacity={'30%'} justifyContent={'center'}><SiAdblock /> turn off ad blocker if an error occurs</Text>                            
                        </Flex>     
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </React.Fragment>
    );
}

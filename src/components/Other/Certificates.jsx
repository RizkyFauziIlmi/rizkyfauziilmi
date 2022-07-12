import { Flex, Grid, GridItem, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import image1 from '../../assets/image/COMMAND LINE CERTIFICATE.jpg'
import image2 from '../../assets/image/GIT CERTIFICATE.jpg'
import image3 from '../../assets/image/HTML & CSS CERTIFICATE.jpg'
import image4 from '../../assets/image/JAVASCRIPT CERTIFICATE.jpg'
import image5 from '../../assets/image/REACT CERTIFICATE.jpg'
import image6 from '../../assets/image/SASS CERTIFICATE.jpg'
import image7 from '../../assets/image/SQL CERTIFICATE.jpg'
import image8 from '../../assets/image/WEBAPP NODEJS CERTIFICATE.jpg'

export default function Certificates() {

    const images = [
        {
            title: 'COMMAND LINE CERTIFICATE',
            image: image1,
            url: 'https://progate.com/course_certificate/f268945drbcxrk'
        },
        {
            title: 'GIT CERTIFICATE',
            image: image2,
            url: 'https://progate.com/course_certificate/c5460fc6rbexix'
        },
        {
            title: 'HTML & CSS CERTIFICATE',
            image: image3,
            url : 'https://progate.com/course_certificate/48a6f02drbbaup'
        },
        {
            title: 'JAVASCRIPT CERTIFICATE',
            image: image4,
            url: 'https://progate.com/course_certificate/ebe0355frbcuav'
        },
        {
            title: 'REACT CERTIFICATE',
            image: image5,
            url: 'https://progate.com/course_certificate/d8b07c51rbpt6z'
        },
        {
            title: 'SASS CERTIFICATE',
            image: image6,
            url: 'https://progate.com/course_certificate/4785ebearbcw0w'
        },
        {
            title: 'SQL CERTIFICATE',
            image: image7,
            url: 'https://progate.com/course_certificate/1d277a79rbgefp'
        },
        {
            title: 'WEBAPP NODEJS CERTIFICATE',
            image: image8,
            url: 'https://progate.com/path_certificate/608f4ec6rbgcf4'
        }
    ]

    return (
        <Flex height={'100vh'} gap={6} textAlign={'center'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
            <Heading>CERTIFICATES</Heading>
            <Grid justifyContent={'center'} templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']} gap={2}>
                {images.map((image) => {
                    return(
                        <GridItem key={image.title}>
                            <Link href={image.url} target={'_blank'}>
                                <Image className="certificate-image" width={['50vw', '50vw', '20vw', '20vw']} style={{ aspectRatio: '4/3' }} src={image.image} alt={image.title} />
                            </Link>
                        </GridItem>
                    )
                })}
            </Grid>
            <Text as='u' fontSize={'xs'} opacity={'0.5'}>Click picture to see certificate online</Text>
        </Flex>
    )
}
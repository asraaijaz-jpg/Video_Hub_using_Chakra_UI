import React from 'react';
import {
    Box, Image, Heading, Container, VStack, Stack,
    Text
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const headingoptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: "translate(-50%,-50%)",
    textTransform: 'uppercase',
    p: '4',
    size: '2xl'
}

const Home = () => {
    return (
        <Box>
            <Carousel
                autoPlay
                infiniteLoop
                interval={1000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >

                <Box w="full" h={"100vh"}>
                    <Image src={img2} />
                    <Heading bgColor={"whiteAlpha.700"}
                        color={"black"} {...headingoptions}>Future is Gaming</Heading>
                </Box>


                <Box w="full" h={"100vh"}>
                    <Image src={img1} />
                    <Heading bgColor={"blackAlpha.600"}
                        color={"white"} {...headingoptions}>Watch The Future</Heading>
                </Box>

                <Box w="full" h={"100vh"}>
                    <Image src={img3} />
                    <Heading bgColor={"whiteAlpha.600"}
                        color={"black"} {...headingoptions}>Gaming on console</Heading>
                </Box>

                <Box w="full" h={"100vh"}>
                    <Image src={img4} />
                    <Heading bgColor={"whiteAlpha.600"}
                        color={"black"} {...headingoptions}>Night Lift is cool</Heading>
                </Box>


            </Carousel>
            <Container minH={'100vh'} maxW={'container.xl'} p="16">

                <Heading textTransform={"uppercase"} py="2" w={"fit-content"}
                    borderBottom={"2px solid"} m="auto">Services</Heading>

                <Stack h={"full"} p={"4"} alignItems={"centre"} direction={['column', 'row']}>
                    <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40", "400"]} />

                    <Text letterSpacing={"widest"} lineHeight={"190%"}
                    p={['4','16']} textAlign={"centre"}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    
</Text>
                </Stack>

            </Container>

        </Box>
    );
}



export default Home;

import React from 'react';
import { Box, Heading, Stack, VStack, HStack, Button, Input, Text } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minh={"40"} p={"16"} color={"white"}>

            <Stack direction={["column", "row"]}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={"md"} textTransform={"uppercase"} textAlign={["center" , "left"]}>Subscribe to get more Updates</Heading>

                    <HStack boderBottom={'2px solid white'} py={'2'}>

                        <Input placeholder="Enter Email here ..."
                            borderRadius="none"
                            boder="none"
                            outline="none"
                            focusborderColor={"none"} 
                            w={"75%"}/>
                        <Button
                            p={'0'}
                            colorScheme={"puprle"}
                            variant={"ghost"}
                            borderRadius={"0 20px 20px 0"}
                        ><AiOutlineSend size={20} /></Button>
                    </HStack>
                </VStack >

                <VStack
                    w={"full"}
                    boderLeft={['none', '1px solid white']}
                    boderRight={['none', '1px solid white']}
                >

                    <Heading textTransform={"uppercase"} textAlign={"center"}>
                        VIDEO HUB
                    </Heading>
                    <Text>All Rights Received</Text>
                </VStack>

                <VStack w={"full"}>
                    <Heading textTransform={'uppercase'} size={'md'}>Social Media</Heading>

                    <Button variant={'link'} colorScheme={'white'}>
                        <a target="blank" href='https://youtube.com'>Youtube</a>
                    </Button>

                    <Button variant={'link'} colorScheme={'white'}>
                    <a target="blank" href='https://instagram.com'>Instagram</a>
                </Button>


                <Button variant={'link'} colorScheme={'white'}>
                <a target="blank" href='https://github.com'>Github</a>
            </Button>


                </VStack>

            </Stack>
        </Box>
    );
}

export default Footer;

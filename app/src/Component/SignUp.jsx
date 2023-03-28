import React from 'react';
import { Container, Text, VStack, Heading, Input, Button, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'} >

            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'}>
                    <Heading alignSelf={'center'}>VIDEO HUB</Heading>
                    <Avatar alignSelf={'center'} boxSize={'20'} />


                    <Input
                        placeholder={'Name'}
                        type={'text'}
                        required
                        focusBorderColor={'purple.500'} />

                    <Input
                        placeholder={'Email'}
                        type={'email'}
                        required
                        focusBorderColor={'purple.500'} />

                    <Input
                        placeholder={'Password'}
                        type={'password'}
                        required
                        focusBorderColor={'purple.500'} />

                 

                    <Button type={'submit'} colorScheme={'purple'}>
                     SignUp
        </Button>

                    <Text textAlign={'right'}>Already SignUp? {' '}

                        <Button variant={'link'} colorScheme={'purple'}>
                            <Link to={'/login'}>Login In </Link>
                        </Button>

                    </Text>


                </VStack>
            </form>

        </Container>
    );
}

export default SignUp;

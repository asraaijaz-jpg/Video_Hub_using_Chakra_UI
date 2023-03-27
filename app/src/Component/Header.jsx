import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    Button,
    Stack, HStack, VStack ,
    useDisclosure
} from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi';
import {Link} from 'react-router-dom';



const Header = () => {

    const {isOpen , onOpen , onClose} =useDisclosure();
    return (
      <>
      <Button 
      pos={"fixed"} 
      top={"4"} 
      left={"4"}
      colorScheme="purple" 
      w={"10"} 
      p={"0"}
      h={"10"} video
      borderRadius={"full"}
      onClick={onOpen}>
      <BiMenuAltLeft size={"20"}/>
      </Button> 

      <Drawer isOpen={isOpen} placement="left"
      onClose={onClose}>

      <DrawerOverlay/>

      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>VIDEO HUB</DrawerHeader>

        <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button variant={"ghost"} colorScheme="purple">
                    <Link to={'/'}>Home</Link>
                </Button>

                 <Button variant={"ghost"} colorScheme="purple">
                    <Link to={'/videos'}>Videos</Link>
                </Button>

                 <Button variant={"ghost"} colorScheme="purple">
                    <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>

                 <Button variant={"ghost"} colorScheme="purple">
                    <Link to={'/upload'}>Upload Video</Link>
                </Button>
            </VStack>

            <HStack pos={"absolute"} bottom={"10"} 
            left={"0"}  width={"full"}
            justifyContent={"space-evenly"}>
                <Button colorScheme={'purple'}>
                    <Link to={'/login'} >Login</Link>
                </Button>

                 <Button colorScheme={'purple'} variant={'outline'}>
                    <Link to={'/signup'} >SignUp</Link>
                </Button>
            </HStack>
        </DrawerBody>
      </DrawerContent>

      </Drawer>
      </>
    );
};


export default Header;

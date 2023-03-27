import React from 'react';
import { useColorMode, useColorModeValue, IconButton, chakra } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { equal } from 'uri-js';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      pos={"fixed"}
      top={"4"}    
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;


// top={"4"}  4 is unit of chakra_ui and 4 px is equal to 1 unit of chakra_ui
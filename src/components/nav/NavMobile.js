import React from 'react';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavMobile = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        variant='outline'
        icon={<HamburgerIcon />}
      ></MenuButton>
      <MenuList>
        <Link href='#' _hover={{ textDecor: 'none' }}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href='#about-section' _hover={{ textDecor: 'none' }}>
          <MenuItem>About Me</MenuItem>
        </Link>
        <Link href='#exp-section' _hover={{ textDecor: 'none' }}>
          <MenuItem>Experience</MenuItem>
        </Link>
        <Link href='#skill-section' _hover={{ textDecor: 'none' }}>
          <MenuItem>Skills</MenuItem>
        </Link>
        <Link href='#project-section' _hover={{ textDecor: 'none' }}>
          <MenuItem>Projects</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default NavMobile;

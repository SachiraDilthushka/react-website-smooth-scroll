import React from 'react';

import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({toggle}) => {
	return (
		<>
		<Nav>
			<NavbarContainer>
				<NavLogo to ='/'>
					Azyntra
				</NavLogo>
				<MobileIcon onClick = {toggle}>
					<FaBars/>
				</MobileIcon>

				<NavMenu>
					<NavItem>
						<NavLinks to ='about'>About</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='website'>Web Design</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='mobile'>Mobile Apps</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='software'>Bespoke Software</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='services'>Services</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='ContactUs'>Contact Us</NavLinks>
					</NavItem>

				</NavMenu>
				<NavBtn>
					<NavBtnLink to= '/contactus' >Hire Us</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
		
		</>
	)
}

export default Navbar

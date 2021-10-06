import React, {useState, useEffect} from 'react';
import {IconContext} from 'react-icons/lib'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = ()=>{
		if(window.scrollY >= 80){
			setScrollNav(true);
		}
		else {
			setScrollNav(false)
		}
	}

	useEffect( ()=>{
		window.addEventListener('scroll', changeNav)
	}, []	);

	const toggleHome = () => {
		scroll.scrollToTop();
	}
	return (
		<>
		<IconContext.Provider value = {{color: '#fff'}}>
		<Nav scrollNav ={scrollNav}>
			<NavbarContainer>
				<NavLogo to ='/' onClick = {toggleHome}>
					Azyntra
				</NavLogo>
				<MobileIcon onClick = {toggle}>
					<FaBars/>
				</MobileIcon>

				<NavMenu>
					<NavItem>
						<NavLinks to ='about' 
						smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
						>About</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='website'
						smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
						>Web Design</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='software'
						smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
						>Bespoke Software</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='mobile'
						smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
						>Mobile Apps</NavLinks>
					</NavItem>
					
					<NavItem>
						<NavLinks to ='services'
						smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
						>Services</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to ='ContactUs'
						smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
						>Contact Us</NavLinks>
					</NavItem>

				</NavMenu>
				<NavBtn>
					<NavBtnLink to= '/contactus' >Hire Us</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
		</IconContext.Provider>
		</>
	)
}

export default Navbar

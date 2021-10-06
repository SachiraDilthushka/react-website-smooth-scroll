import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink, SidebarBtnWrap,SidebarRoute } from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
	return (
		<SidebarContainer isOpen ={isOpen} onClick = {toggle}>
			<Icon onClick = {toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick = {toggle} 
					smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
					>
						About
					</SidebarLink>
					<SidebarLink to="website" onClick = {toggle}
					smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
					>
					    Web Design
					</SidebarLink>
					<SidebarLink to="software" onClick = {toggle}
					smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
					>
					    Bespoke Software
					</SidebarLink>

					<SidebarLink to="mobile" onClick = {toggle}
					smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
					>
					    Mobile Apps
					</SidebarLink>
					
					<SidebarLink to="services" onClick = {toggle}
					smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
					>
						Services
					</SidebarLink>
					<SidebarLink to="ContactUs" onClick = {toggle}
					smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
					>
					Contact Us
					</SidebarLink>

				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarRoute to = '/contactus'>Hire Us </SidebarRoute>
				</SidebarBtnWrap>
			</SidebarWrapper>


		</SidebarContainer>
	)
}

export default Sidebar

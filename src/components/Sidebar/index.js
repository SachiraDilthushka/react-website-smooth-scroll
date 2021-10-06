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
					<SidebarLink to="about" onClick = {toggle}>
						About
					</SidebarLink>
					<SidebarLink to="website" onClick = {toggle}>
					    Web Design
					</SidebarLink>
					<SidebarLink to="mobile" onClick = {toggle}>
					    Mobile Apps
					</SidebarLink>
					<SidebarLink to="software" onClick = {toggle}>
					    Bespoke Software
					</SidebarLink>
					<SidebarLink to="services" onClick = {toggle}>
						Services
					</SidebarLink>
					<SidebarLink to="ContactUs" onClick = {toggle}>
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

import React from 'react';
import img from '../../images/avatar.jpeg'
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, FooterLinkContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialMediaLogo, WebsiteRights, SocialIcons, SocialIconLink,Img, DeveloperAvatar } from './FooterElements'
const Footer = () => {

	const toggleHome = () => {
		scroll.scrollToTop();
	}
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterLinkContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Company</FooterLinkTitle>
							<FooterLink to="/contactus">About</FooterLink>
							<FooterLink to="/contactus">Blog</FooterLink>
							<FooterLink to="/contactus">Contact Us</FooterLink>
							<FooterLink to="/contactus">Projects</FooterLink>
							<FooterLink to="/contactus">Careers</FooterLink>
							<FooterLink to="/contactus">Terms of Services</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Technologies</FooterLinkTitle>
							<FooterLink to="/contactus">Internet Of Things(IoT)</FooterLink>
							<FooterLink to="/contactus">Cybersecurity</FooterLink>
							<FooterLink to="/contactus">Artificial Intelligence(AI)</FooterLink>
							<FooterLink to="/contactus">Augmented Reality(AR)</FooterLink>
							<FooterLink to="/contactus">Vurtual Reality(VR)</FooterLink>
							<FooterLink to="/contactus">Blockchain</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Software Solutions</FooterLinkTitle>
							<FooterLink to="/contactus">Customer Relationship Management (CRM)</FooterLink>
							<FooterLink to="/contactus">Leasing Management System</FooterLink>
							<FooterLink to="/contactus">Hotel Reservation Management System</FooterLink>
							<FooterLink to="/contactus">Learning Management System (LMS)</FooterLink>
							<FooterLink to="/contactus">Medicine Ordering System</FooterLink>
							<FooterLink to="/contactus">Applicant Tracking system (ATS)</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Web Development and Mobile apps</FooterLinkTitle>
							<FooterLink to="/contactus">eCommerce</FooterLink>
							<FooterLink to="/contactus">Mobile Apps</FooterLink>
							<FooterLink to="/contactus">Document Management System</FooterLink>
							<FooterLink to="/contactus">Patient Management System</FooterLink>
							<FooterLink to="/contactus">Logistics Management System</FooterLink>
							<FooterLink to="/contactus">Appointment Management System</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinkContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialMediaLogo to='/' onClick ={toggleHome}>
							Azyntra
						</SocialMediaLogo>
						<DeveloperAvatar>
						<Img src={img} alt = 'avatar'/>
						</DeveloperAvatar>
						<WebsiteRights>Azyntra © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>

						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>

			</FooterWrapper>

		</FooterContainer>
	)
}

export default Footer

import React from 'react';
import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-8.svg';
import Icon3 from '../../images/svg-9.svg';
import Icon4 from '../../images/svg-10.svg';
import Icon5 from '../../images/svg-11.svg';
import Icon6 from '../../images/svg-12.svg';
import { ServicesContainer, ServicesH1,ServicesWrapper,ServicesCard, ServicesIcon, ServicesH2,ServicesP  } from './ServiceElements'
const Services = () => {
	return (
		<ServicesContainer id = "services">
		<ServicesH1>Our Services</ServicesH1>
		<ServicesWrapper>
			<ServicesCard>
			 <ServicesIcon src ={Icon1}></ServicesIcon>
			 <ServicesH2>Responsive Websites</ServicesH2>
			 <ServicesP>We create mobile responsive websites & we do testing on almost all the devices & browsers for compatibility</ServicesP>
			</ServicesCard>

			<ServicesCard>
			 <ServicesIcon src ={Icon2}></ServicesIcon>
			 <ServicesH2>SEO Friendly Websites</ServicesH2>
			 <ServicesP>We develop SEO friendly websites whereas your clients will surely find you online the way you found us online</ServicesP>
			</ServicesCard>

			<ServicesCard>
			 <ServicesIcon src ={Icon3}></ServicesIcon>
			 <ServicesH2>#1 in Search Engines</ServicesH2>
			 <ServicesP>Azyntra® comes to top 3 search results when ‘Website, Software, Mobile, eCommerce’ keywords are searched in Google</ServicesP>
			</ServicesCard>

			<ServicesCard>
			 <ServicesIcon src ={Icon4}></ServicesIcon>
			 <ServicesH2>Value for Money</ServicesH2>
			 <ServicesP>We are known as a ‘Value for Money’ Solution Provider when compared to established & professional competitors</ServicesP>
			</ServicesCard>

			<ServicesCard>
			 <ServicesIcon src ={Icon5}></ServicesIcon>
			 <ServicesH2>UX is Everything</ServicesH2>
			 <ServicesP>User Experience is our forte. We specialize in identifying how your clients think & behave/search online</ServicesP>
			</ServicesCard>

			<ServicesCard>
			 <ServicesIcon src ={Icon6}></ServicesIcon>
			 <ServicesH2>Ethical Business Pactrice</ServicesH2>
			 <ServicesP>Genuinely developed codes, concepts and content along with UX driven UI designs with web & mobile standards</ServicesP>
			</ServicesCard>

			
		</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services

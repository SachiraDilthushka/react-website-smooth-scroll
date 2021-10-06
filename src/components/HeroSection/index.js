import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,ArrowRight } from './heroSectionElements';
import Video from '../../videos/video720.mp4';
const HeroSection = () => {
const [hover, setHover] = useState(false);
const onHover = ()=>{
	setHover(!hover);
}
	return (
		<HeroContainer id ='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
         <HeroContent>
			<HeroH1>We design and develop Software Solutions</HeroH1>
			<HeroP>
			Software systematize your business
			</HeroP>
			<HeroBtnWrapper>
				<Button to = 'services' onMouseEnter = {onHover} onMouseLeave = {onHover} primary = 'true' dark='true'
				smooth ={true} duration ={500} spy ={true} exact ='true' offset = {-80} 
				>
					Get started {hover ? <ArrowForward/>: <ArrowRight/>}
				</Button>
			</HeroBtnWrapper>

		 </HeroContent>
		</HeroContainer>
	)
}

export default HeroSection;

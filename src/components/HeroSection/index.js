import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,ArrowRight } from './heroSectionElements';
import Video from '../../videos/video.mp4';
const HeroSection = () => {
const [hover, setHover] = useState(false);
const onHover = ()=>{
	setHover(!hover);
}
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
         <HeroContent>
			<HeroH1>We design and develop Software Solutions</HeroH1>
			<HeroP>
			Software systematize your business
			</HeroP>
			<HeroBtnWrapper>
				<Button to = 'Hireus' onMouseEnter = {onHover} onMouseLeave = {onHover} primary = 'true' dark='true'>
					Hire Us {hover ? <ArrowForward/>: <ArrowRight/>}
				</Button>
			</HeroBtnWrapper>

		 </HeroContent>
		</HeroContainer>
	)
}

export default HeroSection;

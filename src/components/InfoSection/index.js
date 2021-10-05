import React from 'react'
import { Button } from 'react-scroll';
import { Colum2, ImgWrap, InfoContainer, InfoRow, Colum1, TextWrapper, TopLine, Heading, Subtitle,Btnwrap, Img  } from './infoElements';


const InfoSection = () => {
	return (
		<>
		<InfoContainer>
		  <InfoRow>
			<Colum1>
			  <TextWrapper>
				  <TopLine>TopLine</TopLine>
				  <Heading>Heading</Heading>
				  <Subtitle>Subtitle</Subtitle>
				  <Btnwrap>
					  <Button to ='home'/>
				  </Btnwrap>
			  </TextWrapper>
			</Colum1>

			<Colum2>
			 <ImgWrap>
			  <Img/>
			 </ImgWrap>
			</Colum2>  
		   </InfoRow>	
		</InfoContainer>	
		</>
	)
}

export default InfoSection

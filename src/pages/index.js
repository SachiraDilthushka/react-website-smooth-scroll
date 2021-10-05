import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjectOne, homeObjectTwo, homeObjectThree,homeObjectFour } from '../components/InfoSection/data';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () =>{
		setIsOpen(!isOpen);
	};



	return (
		<>
		<Sidebar isOpen= {isOpen} toggle = {toggle}/>
		<Navbar toggle = {toggle}/>
		<HeroSection/>
		<InfoSection {...homeObjectOne}/>
		<InfoSection {...homeObjectTwo}/>
		<InfoSection {...homeObjectThree}/>
		<InfoSection {...homeObjectFour}/>
		</>
	)
}

export default Home

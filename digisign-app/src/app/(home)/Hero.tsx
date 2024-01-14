'use client'
import HeroBG from '../../../public/assets/backgrounds/HeroBG.png'
import Image from 'next/image'
import Clipboard from '../../../public/assets/icons/Clipboard.png'
import Wave from '../../../public/assets/backgrounds/HeroWave.png'
import {Button} from '@mui/material'
import {useState} from 'react'
import Price from './Price'
const Hero = () => {
	const [openPrice, setOpenPrice] = useState(false)
	const onOpenPrice = () => {
		document.body.style.overflow = 'hidden'
		setOpenPrice(true)
	}
	const onClosePrice = () => {
		document.body.style.overflow = 'unset'
		setOpenPrice(false)
	}
	const styling = openPrice ? 'w-full text-white ' : 'w-0 text-transparent'
	return (
		<section className="text-white flex justify-center h-screen items-center">
			<div className="absolute top-0 left-0 w-full h-full -z-10">
				<Image src={HeroBG} alt="" className="w-full h-full object-cover" />
			</div>
			<Image
				src={Wave}
				alt=""
				className="absolute top-1/2 -translate-y-1/2 -z-10"
			/>
			<section>
				<h1 className="font-bold text-7xl mb-5">DigiSignID</h1>
				<h3 className="text-xl">
					Empowering Your Documents, Securing Your Signatures
				</h3>
				<section className="mt-10">
					<Button
						className="px-10 py-4 rounded-md shadow-xl drop-shadow-xl text-white bg-color2 hover:bg-color5 hover:text-white"
						onClick={onOpenPrice}
					>
						Get Started
					</Button>
				</section>
			</section>
			<Image src={Clipboard} alt="" className="w-80" />
			<Price styling={styling} closePrice={onClosePrice} />
		</section>
	)
}

export default Hero

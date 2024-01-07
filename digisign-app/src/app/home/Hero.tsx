import HeroBG from '../../../public/assets/backgrounds/HeroBG.png'
import Image from 'next/image'
import Clipboard from '../../../public/assets/icons/Clipboard.png'
const Hero = () => {
	return (
		<section className="text-white flex justify-center h-screen items-center">
			<div className="absolute top-0 left-0 w-full h-full -z-10">
				<Image src={HeroBG} alt="" className="w-full h-full object-cover" />
			</div>
			<section>
				<h1 className="font-bold text-7xl mb-5">DigiSign</h1>
				<h3 className="text-xl">
					Empowering Your Documents, Securing Your Signatures
				</h3>
				<section className='flex gap-5 mt-10' >
					<button className="px-6 py-2 rounded-xl bg-color2 ">
						Get Started
					</button>
					<button className="px-6 py-2 rounded-xl bg-white text-color2">
						Learn More
					</button>
				</section>
			</section>
			<Image src={Clipboard} alt="" className="" />
		</section>
	)
}

export default Hero

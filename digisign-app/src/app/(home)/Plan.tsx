import Image from 'next/image'
import HexaBG1 from '../../../public/assets/backgrounds/HexaBG1.png'
import Glass from '../../../public/assets/icons/Glass.png'
import Coin from '../../../public/assets/icons/Coin.png'
import Person from '../../../public/assets/icons/Person.png'
import ICPLogo from '../../../public/assets/icons/ICPLogo.png'
const Plan = () => {
	return (
		<section id="plan" className="relative text-black pt-28 pb-40">
			<Image src={HexaBG1} alt="" className="absolute left-0 top-0 -z-10" />
			<Image src={Glass} alt="" className="absolute left-72 top-16 w-20" />
			<section>
				<h2 className="text-3xl font-bold text-center mb-5">
					Tailored Solutions for Every Need
				</h2>
				<h3 className="text-xl text-center mx-40">
					Crafting Personalized Excellence: Tailored Solutions for Every Need
				</h3>
			</section>
			<section className="flex flex-wrap items-center justify-center gap-20 mt-20">
				<div className="bg-white border border-color2 text-center w-96 aspect-square p-6 shadow-xl drop-shadow-xl rounded-md">
					<div className="gap-y-5">
						<h3 className="text-2xl font-bold bg-gradient-to-r from-color5  to-color3 text-transparent bg-clip-text">
							Individual Plan
						</h3>
						<p>
							Unlock exclusive features effortlessly using DigiSignID Coins.
						</p>
					</div>

					<div className="grid grid-cols-2 justify-center items-center">
						<Image src={ICPLogo} alt="" className="" />
						<h4 className="text-3xl font-bold bg-gradient-to-r from-color5  to-color3 text-transparent bg-clip-text">
							0.1 ICP / Document
						</h4>
					</div>
					<button className="text-white bg-color2 w-full py-2 rounded-md mt-4">
						Register Now!
					</button>
				</div>
				<div className="bg-white border border-color2 text-center w-96 aspect-square p-6 shadow-xl drop-shadow-xl rounded-md">
					<div className="gap-y-5 mb-5">
						<h3 className="text-2xl font-bold bg-gradient-to-r from-color5  to-color3 text-transparent bg-clip-text">
							Business Plan
						</h3>
						<p>Choose efficiency and innovation with DigiSignID.</p>
					</div>

					<div className="space-y-8">
						<div className="flex gap-4 items-center">
							<Image src={Coin} alt="" className="w-20 aspect-square" />
							<div className="text-left">
								<h4 className="text-md	 font-bold">Monthly Subscription</h4>
								<p className="text-xs">
									Unlock premium features seamlessly with our cost-effective
									monthly subscription.
								</p>
							</div>
						</div>
						<div className="w-full h-[0.1rem] bg-slate-500 opacity-20"></div>
						<div className="flex gap-4 items-center">
							<Image src={Person} alt="" className="w-20 aspect-square" />
							<div className="text-left">
								<h4 className="text-md	 font-bold">Cuztomized</h4>
								<p className="text-xs">
									Tailor your solution with our custom offering. Contact us for
									exclusive offers.
								</p>
							</div>
						</div>
					</div>
					<button></button>
				</div>
			</section>
		</section>
	)
}

export default Plan

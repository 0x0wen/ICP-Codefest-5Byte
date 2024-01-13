import Image from 'next/image'
import PriceBG from '../../../public/assets/backgrounds/PriceBG.png'
import Close from '../../../public/assets/icons/Close.svg'
const Price = ({
	styling,
	closePrice,
}: {
	styling: string
	closePrice: () => void
}) => {
	return (
		<div
			className={`  fixed top-0 right-0 z-50 h-full text-white  transition-all duration-500 bg-gradient-to-r from-color5 to-color4  ${styling} `}
		>
			<Image
				src={PriceBG}
				alt=""
				className="absolute top-0 left-0 w-full h-full object-cover"
			/>
			<div className="py-20 space-y-10">
				<section className="text-center">
					<h1 className="text-4xl font-bold">Monthly Subscription</h1>
					<h2 className="text-xl">
						Unlock premium features seamlessly with our cost-effective monthly
						subscription.
					</h2>
				</section>
				<section className="grid grid-cols-4 gap-10 px-10">
					<div className="flex flex-col gap-20 bg-white text-center py-8 bg-opacity-25 rounded-md shadow-lg shadow-white drop-shadow-lg h-[22rem]">
						<h3 className="font-semibold text-xl ">1 Month</h3>
						<section>
							<p className="text-3xl font-semibold">3 ICP / Month</p>
							<p className="">All features unlocked.</p>
						</section>
						<button className="bg-gradient-to-r from-color5 to-color2 px-4 py-2 rounded-md mx-10 hover:scale-110 hover:transition-all duration-500">
							Get you box
						</button>
					</div>
					<div className="flex flex-col gap-20 bg-white text-center py-8 bg-opacity-25 rounded-md shadow-lg shadow-white drop-shadow-lg h-[22rem]">
						<h3 className="font-semibold text-xl ">3 Month</h3>
						<section>
							<p className="text-3xl font-semibold">3 ICP / Month</p>
							<p className="">All features unlocked.</p>
						</section>
						<button className="bg-gradient-to-r from-color5 to-color2 px-4 py-2 rounded-md mx-10 hover:scale-110 hover:transition-all duration-500">
							Get you box
						</button>
					</div>
					<div className="flex flex-col gap-20 bg-white text-center py-8 bg-opacity-25 rounded-md shadow-lg shadow-white drop-shadow-lg h-[22rem]">
						<h3 className="font-semibold text-xl ">6 Month</h3>
						<section>
							<p className="text-3xl font-semibold">3 ICP / Month</p>
							<p className="">All features unlocked.</p>
						</section>
						<button className="bg-gradient-to-r from-color5 to-color2 px-4 py-2 rounded-md mx-10 hover:scale-110 hover:transition-all duration-500">
							Get you box
						</button>
					</div>
					<div className="flex flex-col gap-20 bg-white text-center py-8 bg-opacity-25 rounded-md shadow-lg shadow-white drop-shadow-lg h-[22rem]">
						<h3 className="font-semibold text-xl ">12 Month</h3>
						<section>
							<p className="text-3xl font-semibold">3 ICP / Month</p>
							<p className="">All features unlocked.</p>
						</section>
						<button className="bg-gradient-to-r from-color5 to-color2 px-4 py-2 rounded-md mx-10 hover:scale-110 hover:transition-all duration-500">
							Get you box
						</button>
					</div>
				</section>
			</div>
			<button className="absolute top-5 right-5" onClick={closePrice}>
				<Image src={Close} alt="" className="w-10" />
			</button>
		</div>
	)
}

export default Price

import Image from 'next/image'
import Rocket from '../../../public/assets/icons/Rocket.png'
import Document from '../../../public/assets/icons/Document.png'
import HexaBg2 from '../../../public/assets/backgrounds/HexaBg2.png'
const Features = () => {
	return (
		<section
			id="features"
			className="relative bg-gradient-to-r from-color5 to-color4 text-white pt-28 pb-40 -z-20"
		>
			<Image src={HexaBg2} alt="" className="absolute top-0 right-0 -z-10" />
			<h2 className="text-3xl font-bold text-center mb-5">
				Empower Your Documents: Mastering Single & Batch Signing
			</h2>
			<Image src={Rocket} alt="" className="absolute right-14 top-16 w-24" />
			<h3 className="text-xl text-center mx-40">
				Take control of your document signing experience. Whether it's one or
				many, learn the ins and outs of our individual and batch signing
				features for a seamless and efficient workflow.
			</h3>
			<section className="flex justify-center items-center gap-20 mt-20">
				<section className="space-y-10 ">
					<div className="bg-white bg-opacity-10 shadow-xl drop-shadow-2xl space-y-4 w-[30rem] rounded-xl p-8 ">
						<h4 className="text-3xl">Individual and Bulk Signing</h4>
						<p>
							Easily sign individual digital documents or automate the process
							by signing multiple documents at once. Save time and enhance
							efficiency.
						</p>
					</div>
					<div className="bg-white bg-opacity-10 shadow-xl drop-shadow-2xl space-y-4 w-[30rem] rounded-xl p-8 ">
						<h4 className="text-3xl">Swift Document Validation</h4>
						<p>
							Swiftly validate digital documents, leveraging the robust security
							of the Internet Computer infrastructure.
						</p>
					</div>
				</section>
				<Image src={Document} alt="Document icon" className="w-96" />
			</section>
		</section>
	)
}

export default Features

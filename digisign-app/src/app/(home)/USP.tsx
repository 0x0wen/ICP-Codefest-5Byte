import Image from 'next/image'
import Robot from '../../../public/assets/icons/Robot.png'
import WaveBG from '../../../public/assets/backgrounds/WaveBG.png'
import Plane from '../../../public/assets/icons/Plane.png'
const USP = () => {
	return (
		<section className="relative mt-28 mb-40">
			<h2 className="text-3xl text-center font-bold mb-5">
				DigiSignID: Where Security Meets Simplicity and Flexibility
			</h2>
			<Image src={Plane} alt="" className="absolute top-0 right-20 -z-10" />
			<h3 className="text-xl text-center mx-40">
				Harmonize your digital journey with seamless signature, unrivaled
				security, and tailored flexibility. Experience the symphony of DigiSignID.
			</h3>
			<section className="relative flex justify-center items-center mt-28">
				<Image src={WaveBG} alt="" className="absolute top-0 left-0 -z-10 w-1/2" />
				<Image src={Robot} alt="" className="" />
				<ul className="text-white space-y-8">
					<li className="bg-gradient-to-br from-color8 to-color4  px-8 rounded-lg py-4 w-[30rem] ">
						<h4 className="font-bold">Security Assurance</h4>
						<p>
							DigiSignID ensures top-notch security using decentralized Internet
							Computer infrastructure for key storage, guaranteeing the safety
							of digital signatures.
						</p>
					</li>
					<li className="bg-gradient-to-br from-color8 to-color4  px-8 rounded-lg py-4 w-[30rem] ml-20">
						<h4 className="font-bold">Simplicity Redefined</h4>
						<p>
							DigiSignID simplifies digital signatures and document validation
							with an intuitive interface, making actions easy with just a few
							clicks.
						</p>
					</li>
					<li className="bg-gradient-to-br from-color8 to-color4  px-8 rounded-lg py-4 w-[30rem] ml-20">
						<h4 className="font-bold">Effortless Batch Signing</h4>
						<p>
							Save time with DigitalSignID's automated batch signing,
							streamlining the process for handling multiple documents
							simultaneously.
						</p>
					</li>
					<li className="bg-gradient-to-br from-color8 to-color4  px-8 rounded-lg py-4 w-[30rem] ">
						<h4 className="font-bold">Tailored Business Solutions</h4>
						<p>
							DigiSignID offers flexible business models for both personal and
							corporate users, allowing them to choose packages that suit their
							specific needs.
						</p>
					</li>
				</ul>
			</section>
		</section>
	)
}

export default USP

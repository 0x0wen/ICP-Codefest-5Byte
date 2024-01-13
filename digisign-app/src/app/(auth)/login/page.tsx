import Office from '../../../../public/assets/backgrounds/Office.png'
import Image from 'next/image'
const LoginPage = () => {
	return (
		<main className="min-w-full min-h-full grid grid-cols-2">
			<div></div>
			<div className="relative h-screen">
				<Image src={Office} alt="Office" className="h-full object-cover" />
				<div className="absolute w-full h-full top-0 left-0 opacity-75 bg-gradient-to-b from-color2 to-color3 flex flex-col items-center justify-center text-white"></div>
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full text-white space-y-5'>
					<h1 className="font-bold text-5xl opacity-100">DigiSignID</h1>
					<p className="text-2xl">Your Digital Signature of Trust</p>
				</div>
			</div>
		</main>
	)
}

export default LoginPage

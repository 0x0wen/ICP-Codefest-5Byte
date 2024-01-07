'use client'
import Link from 'next/link'
import Scroll from './Scroll'
import {useState, useCallback} from 'react'
const Navbar = () => {
	const [navbarBG, setNavbarBG] = useState(false)
	const setColoredNavbar = useCallback(() => {
		setNavbarBG(true)
	}, [])

	const setTransparentNavbar = useCallback(() => {
		setNavbarBG(false)
	}, [])
	return (
		<ul
			className={
				navbarBG
					? 'fixed w-full top-0 z-50 flex justify-evenly text-white py-5 bg-color2 bg-opacity-90'
					: 'fixed w-full top-0 z-50 flex justify-evenly text-white py-5'
			}
		>
			<Scroll colored={setColoredNavbar} transparent={setTransparentNavbar} />
			<li>
				<Link
					href={'/'}
					className="bg-color2 bg-opacity-0 hover:bg-opacity-25 px-4 py-2 rounded-lg"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					href={'/digital-signature'}
					className="bg-color2 bg-opacity-0 hover:bg-opacity-25 px-4 py-2 rounded-lg"
				>
					Digital Signature
				</Link>
			</li>
			<li>
				<Link
					href={'/document-validation'}
					className="bg-color2 bg-opacity-0 hover:bg-opacity-25 px-4 py-2 rounded-lg"
				>
					Document Validation
				</Link>
			</li>
			<li>
				<Link
					href={'/pricing'}
					className="bg-color2 bg-opacity-0 hover:bg-opacity-25 px-4 py-2 rounded-lg"
				>
					Pricing
				</Link>
			</li>
			<li>
				<Link
					href={'/contact-us'}
					className="bg-color2 bg-opacity-0 hover:bg-opacity-25 px-4 py-2 rounded-lg"
				>
					Contact us
				</Link>
			</li>
			<li>
				<Link
					href={'/login'}
					className="bg-white text-color2 px-6 py-2 rounded-xl"
				>
					Log In
				</Link>
			</li>
		</ul>
	)
}

export default Navbar

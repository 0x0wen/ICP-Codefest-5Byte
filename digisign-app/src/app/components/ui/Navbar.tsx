'use client'
import Scroll from './Scroll'
import {useState, useCallback, useEffect} from 'react'
import {AuthClient} from '@dfinity/auth-client'
import {Button} from '@mui/material'
import ICLogo from '../../../../public/assets/icons/ic-logo.png'
import Image from 'next/image'
import DigiSignLogo from '../../../../public/assets/icons/DigiSignID.png'
import {Link} from 'react-scroll'

const Navbar = () => {
	const [navbarBG, setNavbarBG] = useState(false)
	const [client, setClient] = useState<AuthClient>()

	const setColoredNavbar = useCallback(() => {
		setNavbarBG(true)
	}, [])

	const setTransparentNavbar = useCallback(() => {
		setNavbarBG(false)
	}, [])
	useEffect(() => {
		initAuth()
	}, [])
	const SignInFunctions = async (principal) => {
		// anvilDispatch(user_login())
		// dispatch(setPrincipal(principal.toString()))
		// dispatch(setLogin())
		// Usergeek.setPrincipal(principal)
		// Usergeek.trackSession()
		// Usergeek.trackEvent('UserSignIn')
	}

	const initAuth = async () => {
		// Usergeek.init({
		// 	apiKey: '01B802010D2B6BF49CA5C24532F2D7DB',
		// })

		const client = await AuthClient.create()

		const isAuthenticated = await client.isAuthenticated()

		setClient(client)

		if (isAuthenticated) {
			const identity = client.getIdentity()
			const principal = identity.getPrincipal()
			SignInFunctions(principal)
		}
	}

	const signIn = async () => {
		const {principal} = await new Promise((resolve, reject) => {
			client.login({
				identityProvider: 'https://identity.ic0.app',
				onSuccess: () => {
					const identity = client.getIdentity()
					const principal = identity.getPrincipal()
					resolve({principal})
				},
				onError: reject,
				windowOpenerFeatures:
					`left=${window.screen.width / 2 - 525 / 2}, ` +
					`top=${window.screen.height / 2 - 705 / 2},` +
					`toolbar=0,location=0,menubar=0,width=525,height=705`,
			})
		})
		await SignInFunctions(principal)
	}
	return (
		<ul
			className={
				navbarBG
					? 'fixed w-full top-0 z-50 flex justify-evenly items-center text-white  bg-gradient-to-r from-color5 via-color2  to-color3 bg-opacity-70'
					: 'fixed w-full top-0 z-50 flex justify-evenly items-center text-white '
			}
		>
			<Scroll colored={setColoredNavbar} transparent={setTransparentNavbar} />
			<li>
				<Link to={'/'} className="  text-xl px-4 py-2 rounded-lg">
					<Image src={DigiSignLogo} alt="" className="w-32" />
				</Link>
			</li>
			<li>
				<Link
					duration={1000}
					to="usp"
					smooth={true}
					className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
				>
					Why Us?
				</Link>
			</li>
			<li>
				<Link
					duration={1000}
					to="features"
					smooth={true}
					className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
				>
					Features
				</Link>
			</li>
			<li>
				<Link
					duration={1000}
					to="plan"
					smooth={true}
					className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
				>
					Plan
				</Link>
			</li>
			<li>
				<Link
					duration={1000}
					to="footer"
					smooth={true}
					className="bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-color2 cursor-pointer text-lg  px-4 py-2 rounded-md"
				>
					Contact us
				</Link>
			</li>
			<li>
				<Button
					onClick={signIn}
					className="bg-white hover:text-color2 shadow-lg drop-shadow-xl	hover:bg-slate-100 px-5"
				>
					Login&nbsp;
					<Image src={ICLogo} alt="" className="w-8" />
				</Button>
			</li>
		</ul>
	)
}

export default Navbar

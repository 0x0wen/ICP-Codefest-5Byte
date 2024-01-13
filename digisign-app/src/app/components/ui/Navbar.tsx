'use client'
import Link from 'next/link'
import Scroll from './Scroll'
import {useState, useCallback, useEffect} from 'react'
import {AuthClient} from '@dfinity/auth-client'
import {Button} from '@mui/material'
import ICLogo from '../../../../public/assets/icons/ic-logo.png'
import Image from 'next/image'
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
				<Button
					onClick={signIn}
					className="bg-white hover:text-color2	hover:bg-slate-100"
				>
					Login&nbsp;
					<Image src={ICLogo} alt="" className="w-8" />
				</Button>
			</li>
		</ul>
	)
}

export default Navbar

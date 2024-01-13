import Image from 'next/image'
import Home from '../../../../public/assets/icons/Home.png'
import Signature from '../../../../public/assets/icons/Signature.png'
import Roll from '../../../../public/assets/icons/Roll.png'
import Logout from '../../../../public/assets/icons/Out.png'
import Link from 'next/link'
const Sidebar = () => {
	return (
		<div className="text-white bg-color5 fixed left-0 h-full z-50 w-72">
			<div className="grid grid-cols-1 place-items-center">
				<h2 className="font-bold mx-auto py-4 text-2xl">DigiSignID</h2>
				<ul className="grid grid-cols-1 place-items-center gap-2 mt-20">
					<li>
						<Link
							href="/dashboard"
							className="bg-white bg-opacity-20 w-60 flex items-center gap-4 rounded-md"
						>
							<Image src={Home} alt="" />
							<p>Dashboard</p>
						</Link>
					</li>
					<li>
						<Link
							href="/signature"
							className="bg-white bg-opacity-20 w-60 flex items-center gap-4 rounded-md"
						>
							<Image src={Signature} alt="" />
							<p>Signature</p>
						</Link>
					</li>
					<li>
						<Link
							href="/my-document"
							className="bg-white bg-opacity-20 w-60 flex items-center gap-4 rounded-md"
						>
							<Image src={Roll} alt="" />
							<p>My Documents</p>
						</Link>
					</li>
				</ul>
			</div>
			<Link
				href="/"
				className="absolute left-1/2 bottom-5  -translate-x-1/2 flex items-center gap-4 w-60 border border-white border-opacity-50 rounded-md "
			>
				<Image src={Logout} alt="" />
				<p>Log out</p>
			</Link>
		</div>
	)
}

export default Sidebar

import {Divider} from '@mui/material'
import Document from './Document'
import Image from 'next/image'
import Signature from '../../../public/assets/icons/SignaturePurple.png'
import Pass from '../../../public/assets/icons/Pass.png'
import Link from 'next/link'
const Dashboard = () => {
	const documentData = [
		{
			name: 'Document 1',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'Document 2',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'Document 3',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'Document 4',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
	]
	return (
		<div className="ml-72 px-10 pt-10 pb-20 h-fit">
			<h1 className="text-4xl font-bold text-color2">Dashboard</h1>
			<section className="flex gap-5 py-10">
				<div className="space-y-2 w-52 bg-gradient-to-br from-color2 to-color3 shadow-md shadow-color2  p-4 rounded-md ">
					<p className="text-white opacity-80 text-xs">PLAN</p>
					<h3 className="text-4xl font-bold text-white py-10">3 Month</h3>
					<p className="text-white opacity-80 text-xs">SINCE JAN 2023</p>
				</div>
				<section className="space-y-2">
					<div className="space-y-2 w-52 shadow-md shadow-color2  p-4 rounded-md">
						<section className="flex items-center justify-between">
							<Image src={Signature} alt="" className="w-8 aspect-square" />
							<h3 className="text-color2 text-4xl">41</h3>
						</section>
						<p className="text-slate-400 text-xs">DOCUMENT SIGNED</p>
					</div>
					<div className="space-y-2 w-52 shadow-md shadow-color2  p-4 rounded-md">
						<section className="flex items-center justify-between">
							<Image src={Pass} alt="" className="w-8 aspect-square" />
							<h3 className="text-color2 text-4xl">210</h3>
						</section>
						<p className="text-slate-400 text-xs">DOCUMENTS VALIDATED</p>
					</div>
				</section>
			</section>
			<section className="flex items-center w-full">
				<h2 className="text-xl w-64">Your Document</h2>
				<div className="w-full h-[0.05rem] bg-black bg-opacity-30"></div>
			</section>
			<section className="grid grid-cols-1 gap-2 mt-10 w-full place-items-end">
				{documentData.map((doc, index) => (
					<Document key={index} name={doc.name} source={doc.url} />
				))}
				<Link href="/my-document" className='underline text-color7 mt-5'>See all</Link>
			</section>
		</div>
	)
}

export default Dashboard

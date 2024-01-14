// import Image from 'next/image'
// import CheckDoc from '../../../public/assets/icons/CheckDoc.png'
// const Document = ({name, source}: {name: string; source: string}) => {
// 	return (
// 		<div className="border border-color2 flex items-center justify-between p-3 w-full rounded-md">
// 			<section className="flex items-center">
// 				<Image src={CheckDoc} alt="" className="h-fit" />
// 				<p className="ml-10 ">{name}</p>
// 			</section>
// 			<a
// 				href={source}
// 				className="rounded-md bg-gradient-to-r from-color2 to-color3 px-4 py-2 text-white"
// 			>
// 				Download
// 			</a>
// 		</div>
// 	)
// }

// export default Document

import Image from 'next/image'
import CheckDoc from '../../../public/assets/icons/CheckDoc.png'
const Document = ({name}: {name: string}) => {
	return (
		<div className="border border-color2 flex items-center justify-between p-3 w-full rounded-md">
			<section className="flex items-center">
				<Image src={CheckDoc} alt="" className="h-fit" />
				<p className="ml-10 ">{name}</p>
			</section>
			
		</div>
	)
}

export default Document


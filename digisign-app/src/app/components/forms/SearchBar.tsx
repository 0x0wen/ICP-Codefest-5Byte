import Image from 'next/image'
import Search from '../../../../public/assets/icons/Search.png'
const SearchBar = ({onSearch}: {onSearch: (word: string) => void}) => {
	const searchHandler = (e: any) => {
		const word = e.target.value
		onSearch(word)
	}
	return (
		<div className="w-full rounded-full border border-black border-opacity-20 flex px-5 space-x-5">
			<div className="py-3">
				<Image src={Search} alt="" className="aspect-square w-6 h-6" />
			</div>
			<div className="w-full">
				<input
					type="text"
					name=""
					id=""
					placeholder="Search Document"
					className="w-full h-full outline-none"
					onChange={searchHandler}
				/>
			</div>
		</div>
	)
}

export default SearchBar

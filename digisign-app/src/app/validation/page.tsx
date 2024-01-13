import Upload from './Upload'
import SearchBar from '../components/forms/SearchBar'
const Validation = () => {
	return (
		<div className="h-screen ml-72 px-10 py-5">
			<h1 className="text-4xl font-bold text-color2">Validate Document</h1>
			<p>
				On this platform, you can verify digitally signed documents. If an
				authorized agency has assigned an official function to the signature, it
				will be prominently shown.
			</p>
			<Upload />
		</div>
	)
}

export default Validation

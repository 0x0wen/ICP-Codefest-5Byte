'use client'
import SearchBar from '../components/forms/SearchBar'
import Document from '../dashboard/Document'
import {useState} from 'react'
const MyDocument = () => {
	const [query, setQuery] = useState('')
	const documentData = [
		{
			name: 'ITB Agreement 2023',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'Ministry of Health Agreement 2023',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'President Regulation 2022',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'UI Academic Transcript 2023',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'UGM Free Tuition Agreement 2023',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'ITB International Office Agreement 2023',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'ITB Certificate of Graduation 2023',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'ITB Annual Report 2023',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
	]
	const searchHandler = (searchWord: string) => {
		setQuery(searchWord)
	}
	const filteredSearchData = documentData.filter((document) =>
		document.name.toLowerCase().includes(query)
	)
	return (
		<div className="ml-72 px-10 pt-10 pb-20 h-fit space-y-10">
			<h1 className="text-4xl font-bold text-color2">My Documents</h1>
			<SearchBar onSearch={searchHandler} />
			<section className="grid grid-cols-1 gap-2 mt-10 w-full place-items-end">
				{filteredSearchData.map(
					(
						doc,
						index // Compare this snippet from digisign-app/src/app/dashboard/page.tsx:
					) => (
						<Document key={index} name={doc.name} source={doc.url} />
					)
				)}
			</section>
		</div>
	)
}

export default MyDocument

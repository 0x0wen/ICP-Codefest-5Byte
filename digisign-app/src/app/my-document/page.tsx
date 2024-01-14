import SearchBar from '../components/forms/SearchBar'
import Document from '../dashboard/Document'
const MyDocument = () => {
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
		{
			name: 'Document 5',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'Document 6',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'Document 7',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
		{
			name: 'Document 8',
			url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		},
	]
	return (
		<div className="ml-72 px-10 pt-10 pb-20 h-fit space-y-10">
			<h1 className="text-4xl font-bold text-color2">My Documents</h1>
			<SearchBar />
			<section className="grid grid-cols-1 gap-2 mt-10 w-full place-items-end">
				{documentData.map(
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

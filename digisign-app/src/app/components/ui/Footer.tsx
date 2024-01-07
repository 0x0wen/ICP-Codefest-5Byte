const Footer = () => {
	return (
		<section className="bg-color5  text-white pt-10 pb-20 px-40">
			<section className="grid grid-cols-3 gap-40 items-end">
				<h2 className="font-bold mb-10 text-4xl">DigitalSignID</h2>
				<h3 className="font-bold mb-10">Our Contact</h3>
				<h3 className="font-bold mb-10">Social Media</h3>
			</section>
			<section className="grid grid-cols-3 gap-40">
				<section>
					<h3 className="text-xl">Digital Signature</h3>
					<h3 className="text-xl">Document Validation</h3>
					<h3 className="text-xl">Pricing & Subscription</h3>
				</section>
				<section>
					<h3>support@digisign.com</h3>
					<h3>+62 8 2341 1245</h3>
				</section>
				<section>
					<a href="https://instagram.com/zuck">Instagram</a>
					<a href="https://linkedin.com/zuckerberg">LinkedIn</a>
				</section>
			</section>
		</section>
	)
}

export default Footer

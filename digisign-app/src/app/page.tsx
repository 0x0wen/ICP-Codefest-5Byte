import Hero from './(home)/Hero'
import Features from './(home)/Features'
import Price from './(home)/Plan'
import USP from './(home)/USP'
import ValidationButton from './(home)/Validation'

const Home = () => {
	return (
		<main>
			<Hero />
			<USP />
			<Features />
			<Price />
			<ValidationButton />
		</main>
	)
}

export default Home

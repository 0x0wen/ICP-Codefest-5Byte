'use client'
import {useEffect} from 'react'

export default function Scroll({
	colored,
	transparent,
}: {
	colored: () => void
	transparent: () => void
}) {
	useEffect(() => {
		if (typeof window !== 'undefined' || typeof window !== null) {
			const changeNavbar = () => {
				if (window.scrollY >= 80) {
					colored()
				} else {
					transparent()
				}
			}
			window.addEventListener('scroll', changeNavbar)
			return () => {
				window.removeEventListener('scroll', changeNavbar)
			}
		}
	}, [colored, transparent])

	return null
}

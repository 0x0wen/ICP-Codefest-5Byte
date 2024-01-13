'use client'
import {styled} from '@mui/material/styles'
import UploadIcon from '../../../public/assets/icons/Upload.svg'
import Image from 'next/image'
import {Button} from '@mui/material'
const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
})

const Upload = () => {
	return (
		<Button
			component="label"
			className="w-[30rem] h-96 border border-color7 rounded-lg flex items-center justify-center"
		>
			<Image src={UploadIcon} alt="" />
			<VisuallyHiddenInput type="file" />
		</Button>
	)
}

export default Upload

'use client'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {ReactNode, useState} from 'react'
import Image from 'next/image'
import {styled} from '@mui/material/styles'
import UploadIcon from '../../../public/assets/icons/Upload.svg'

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

export default function DocumentStepper() {
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [activeStep, setActiveStep] = useState(0)
	const [skipped, setSkipped] = useState(new Set<number>())
	const steps = [
		{
			activity: (
				<div>
					<h1>Terms and Conditions</h1>
					<ul>
						<li>
							1. You should only upload a unique document to avoid 2 documents
							having the same encryption.
						</li>
						<li>2. Once a document is signed, it will be immutable.</li>
						<li>3. Once a document is signed, it can't be deleted.</li>
						<li>4. NEVER give access to this account to unauthorized party.</li>
						<li>5. ALWAYS crosscheck everytime you want to sign a document.</li>
					</ul>
				</div>
			),
			label: 'Terms & Conditions',
		},
		{
			activity: (
				<div className="w-[30rem] h-96 border border-color7 rounded-lg flex items-center justify-center">
					<Button component="label" className="w-full h-full">
						{selectedFile ? (
							<div className="text-justify">
								<h2>Name: {selectedFile.name}</h2>
								<h2>Type: {selectedFile.type}</h2>
								<h2>Size: {selectedFile.size}</h2>
							</div>
						) : (
							<Image src={UploadIcon} alt="" />
						)}
						<VisuallyHiddenInput
							type="file"
							onChange={(e) => {
								if (!e.target.files) return
								setSelectedFile(e.target.files[0])
							}}
						/>
					</Button>
				</div>
			),
			label: 'Upload file',
		},
		{
			activity: (
				<div className="py-10">
					<p className="font-bold">
						If you are sure and have checked the document thoroughly, click
						finish.
					</p>
				</div>
			),
			label: 'Confirmation',
		},
	]
	const isStepOptional = (step: number) => {
		return step === 1
	}

	const isStepSkipped = (step: number) => {
		return skipped.has(step)
	}

	const handleNext = () => {
		let newSkipped = skipped
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(activeStep)
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.")
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values())
			newSkipped.add(activeStep)
			return newSkipped
		})
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('submitted')
	}
	return (
		<Box sx={{width: '100%', paddingY: '2.5rem'}}>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) => {
					const stepProps: {completed?: boolean} = {}
					const labelProps: {
						optional?: ReactNode
					} = {}
					if (isStepOptional(index)) {
						labelProps.optional = (
							<Typography variant="caption">Optional</Typography>
						)
					}
					if (isStepSkipped(index)) {
						stepProps.completed = false
					}
					return (
						<Step key={index} {...stepProps}>
							<StepLabel {...labelProps}>{step.label}</StepLabel>
						</Step>
					)
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<>
					<Typography sx={{mt: 2, mb: 1}}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
						<Box sx={{flex: '1 1 auto'}} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			) : (
				<form onSubmit={submitHandler}>
					<Typography sx={{mt: 2, mb: 1}}>Step {activeStep + 1}</Typography>
					{steps[activeStep].activity}
					<Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{mr: 1}}
						>
							Back
						</Button>
						<Box sx={{flex: '1 1 auto'}} />
						{isStepOptional(activeStep) && (
							<Button color="inherit" onClick={handleSkip} sx={{mr: 1}}>
								Skip
							</Button>
						)}
						{activeStep === steps.length - 1 ? (
							<Button onClick={handleNext} type="submit">
								Finish
							</Button>
						) : (
							<Button onClick={handleNext}>Next</Button>
						)}
					</Box>
				</form>
			)}
		</Box>
	)
}

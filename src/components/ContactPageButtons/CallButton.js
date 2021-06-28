import * as React from 'react'
import { contactButton} from './ContactPage.module.css'

const CallButton = () => {
	return (
		<button className={contactButton}><a href="tel:3034216499">Call Us</a></button>
	)
}

export default CallButton
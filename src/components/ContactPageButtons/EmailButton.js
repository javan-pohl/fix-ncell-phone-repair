import * as React from 'react'
import { contactButton} from './ContactPage.module.css'

const EmailButton = () => {
	return (
		<button className={contactButton}><a href="mailto:fixncellllc@gmail.com">Email Us</a></button>
	)
}

export default EmailButton
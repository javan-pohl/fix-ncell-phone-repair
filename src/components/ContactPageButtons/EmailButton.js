import * as React from 'react'
import { contactButton} from './ContactPage.module.css'
import emailIcon from '../../images/email.png'

const EmailButton = () => {
	return (
		<button className={contactButton}><a href="mailto:fixncellllc@gmail.com"><img src={emailIcon} alt="email icon"/><br/>Email Us</a></button>
	)
}

export default EmailButton
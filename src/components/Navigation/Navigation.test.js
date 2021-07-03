import 'jsdom-global/register'
import React from 'react'
import Navigation from './Navigation'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('clicking on hamburger button makes the menu visible', () => {
	const {getByTestId} = render(<Navigation />)
	const hamBtn = getByTestId("hamburgerButton")
	
	fireEvent.click(hamBtn)
	// expect(menuEl).toHaveClass
	// expect(menuEl).toBeVisible()
	const menuEl = getByTestId("navMenu")
	expect(menuEl).toBeVisible()
	// expect(menuEl).toHaveAttribute('visibility', 'hidden')
})
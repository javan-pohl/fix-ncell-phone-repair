import 'jsdom-global/register'
import React from 'react'
import Navigation from './Navigation'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('expect menu to not exist, then to be visible after clicking the hamburger menu, and to again not exist after clicking the menu', () => {
	const {queryByTestId} = render(<Navigation />)
	const hamBtn = queryByTestId("hamburgerButton")
	let menuEl = queryByTestId("navMenu")
	expect(menuEl).toBeNull()
	expect(hamBtn).not.toBeNull()
	fireEvent.click(hamBtn)
	menuEl = queryByTestId("navMenu")
	expect(menuEl).not.toBeNull()
	expect(menuEl).toBeVisible()
	fireEvent.click(menuEl)
	menuEl = queryByTestId("navMenu")
	expect(menuEl).toBeNull()

})

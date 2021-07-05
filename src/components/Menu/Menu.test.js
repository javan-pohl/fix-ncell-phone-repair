import 'jsdom-global/register'
import React from 'react'
import Menu from './Menu'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

const linkIds = ['contactLink', 'homeLink', 'aboutLink', 'repairsLink']
const linkTos = ['/contact', '/', '/about', 'iphone-repair']
const linkText = ['Contact Us', 'Home', 'About', 'Repairs']

test('menu should render four links with the correct names and "to" values', () => {

})
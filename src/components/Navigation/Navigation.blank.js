import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer'
import { shallow, mount, configure } from 'enzyme'
import Navigation from './Navigation'

// describe('Navigation', () => {
// 	const tree = renderer
// 		.create(<Navigation />)
// 		.toJSON()
//   it('renders correctly', () => {
//     expect(tree).toMatchSnapshot()
//   })
// })

configure({ adapter: new Adapter() })

describe('Test Hamburger Menu', () => {
  it('Test click event', () => {
    // const hambMenu = shallow((<Navigation />))
    const wrapper = mount(<Navigation />)
		const propsChildren = wrapper.props.children
    const navChildren = wrapper.children()
		const navMenu = wrapper.find('#navMenu')
		console.log('navChildren: ', navChildren)
		console.log('propsChildren: ', propsChildren)
		console.log('wrapper: ', wrapper)
    // navChildren.find('#hamburgerButton').simulate('click')
    wrapper.find('#hamburgerButton').simulate('click')
    expect(wrapper.find('#navMenu').children()).toBeVisible()
  })
})

import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer'
import { shallow, mount, configure } from 'enzyme'

import Header from './Header'
import Hamburger from '../Hamburger/Hamburger'
import Menu from '../Menu/Menu'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// configure({ adapter: new Adapter() })

// describe('Test Hamburger Menu', () => {
//   it('Test click event', () => {
//     // const hambMenu = shallow((<Header />))
//     const wrapper = mount(<Header />)
// 		const propsChildren = wrapper.props.children
//     const navChildren = wrapper.children()
// 		const navMenu = wrapper.find('#navMenu')
// 		console.log('navChildren: ', navChildren)
// 		console.log('propsChildren: ', propsChildren)
// 		console.log('wrapper: ', wrapper)
//     // navChildren.find('#hamburgerButton').simulate('click')
//     wrapper.find(Hamburger).simulate('click')
//     expect(wrapper.find(Menu)).toBeVisible()
//   })
// })
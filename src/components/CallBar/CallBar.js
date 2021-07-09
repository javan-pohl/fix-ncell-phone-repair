import React from 'react'
import PropTypes from 'prop-types'
import { callBar } from './CallBar.module.css'
import formatPhone from '../../functions/formatPhone'

function CallBar({ phone }) {
  const phoneFormatted = formatPhone(phone)
  return (
    <div className={callBar} data-testid="callBar">
      <a href={`tel:${phone}`} data-testid="callBarNum">
        &#9742; Call or Text
        {' '}
        {phoneFormatted}
      </a>
    </div>
  )
}

CallBar.propTypes = {
  phone: PropTypes.string,
}

CallBar.defaultProps = {
  phone: '3034216499',
}

export default CallBar

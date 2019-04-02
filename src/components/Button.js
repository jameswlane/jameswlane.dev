import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'error', 'disabled', null]),
}

const Button = React.forwardRef(({ variant, ...props }, ref) => {
    const prefix = 'is'
    const classes = classNames(
      'nes-btn',
      variant && `${prefix}-${variant}`,
    )
    if (ref) props.ref = ref
    return <button {...props} type='button' className={classes}/>
  },
)

Button.displayName = 'Button'
Button.propTypes = propTypes

export default Button

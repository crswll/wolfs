import React from 'react'
import classnames from 'classnames'

const Container = ({
  className: parentClassNames,
  ...props
}) => (
  <div
    className={classnames(parentClassNames, 'mx-auto')}
    style={{ minWidth: 320, maxWidth: 1024 }}
    {...props}
  />
)

export default Container

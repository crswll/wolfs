import React from 'react'
import classnames from 'classnames'

const Container = ({
  className: parentClassNames,
  ...props
}) => (
  <div className={classnames(parentClassNames, 'mx-auto min-w-320 max-w-1000')} {...props} />
)

export default Container

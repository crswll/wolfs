const Logo = ({
  title,
  className: parentClassNames,
  ...props,
}) => {
  return (
    <div className={`${parentClassNames || ''}`} {...props}>
      <div className="flex items-center">
        <img
          className="w-full wide:hidden"
          src="/static/logo-vertical.png"
          alt=""
        />
        <img
          className="w-full hidden wide:block"
          src="/static/logo-horizontal.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Logo

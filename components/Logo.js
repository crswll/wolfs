import { name } from '../wolfs'
import { getPath } from '../helpers'

const Logo = ({
  title,
  className: parentClassNames,
  ...props,
}) => {
  return (
    <div className={`${parentClassNames || ''}`} {...props}>
      <div className="flex items-center">
        <img
          className="w-full"
          src={getPath('/static/wolfie.png')}
          alt=""
        />
        <span className="visually-hidden">{name}</span>
      </div>
    </div>
  )
}

export default Logo

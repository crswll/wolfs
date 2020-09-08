import { name } from '../wolfs'
import { getPath } from '../helpers'

const Logo = ({
  title,
  className: parentClassNames,
  ...props
}) => {
  return (
    <div className={`${parentClassNames || ''}`} {...props}>
      <div className="flex items-center">
        <img
          className="w-full"
          src={getPath('/wolfie.png')}
          alt=""
          width={250}
          height={237}
        />
        <span className="visually-hidden">{name}</span>
      </div>
    </div>
  )
}

export default Logo

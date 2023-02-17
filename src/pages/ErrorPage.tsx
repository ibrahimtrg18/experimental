import { Link } from 'react-router-dom'
import { router } from '.'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      {router.routes.map((route) => (
        <li key={route.id}>
          <Link to={route.path || '#'}>{route.path}</Link>
        </li>
      ))}
    </div>
  )
}

export default ErrorPage

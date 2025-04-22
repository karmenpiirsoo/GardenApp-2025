import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <div>
      <Link to='/admin/maintain-products'>
      <button>Maintain products</button>
      </Link>
      <Link to='/admin/add-product'>
      <button>Add product</button>
      </Link>
    </div>
  )
}

export default AdminHome
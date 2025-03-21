import ProductForm from './ProductForm'
import ProductList from './ProductList'
import { useState } from 'react'

export default function AdminDashboard() {
  const [reload, setReload] = useState(false)

  return (
    <div>
      <h1>CHENS29 Admin</h1>
      <ProductForm onCreated={() => setReload(!reload)} />
      <ProductList key={reload} />
    </div>
  )
}

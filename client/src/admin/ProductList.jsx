import { useEffect, useState } from 'react'
import { supabase } from '../supabase/supabaseClient'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const { data, error } = await supabase.from('products').select('*')
      if (error) console.error(error)
      else setProducts(data)
    }
    loadProducts()
  }, [])

  return (
    <div>
      <h2>Produkte</h2>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>{p.price} €</p>
          <img src={p.image_url} alt={p.title} width="100" />
        </div>
      ))}
    </div>
  )
}

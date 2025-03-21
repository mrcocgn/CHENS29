import { useState } from 'react'
import { supabase } from '../supabase/supabaseClient'

export default function ProductForm({ onCreated }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const { error } = await supabase.from('products').insert({
      title, description, price: parseFloat(price), image_url: imageUrl
    })
    if (error) console.error(error)
    else {
      setTitle('')
      setDescription('')
      setPrice('')
      setImageUrl('')
      onCreated && onCreated()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titel" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Beschreibung" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Preis in €" type="number" step="0.01" />
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Bild-URL" />
      <button type="submit">Produkt hinzufügen</button>
    </form>
  )
}

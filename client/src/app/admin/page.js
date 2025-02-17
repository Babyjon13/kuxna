// pages/index.js
'use client'
import { useState,useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <h1>Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type='file'
            id="image"
            name='image'
            value={formData.image}
            onChange={handleChange}
            accept='image/*'
            />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

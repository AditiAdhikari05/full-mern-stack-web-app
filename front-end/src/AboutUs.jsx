import { useEffect, useState } from 'react'
import axios from 'axios'

const AboutUs = () => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAbout(response.data)
      })
      .catch(err => {
        console.error(err)
        setError('Could not load About Us information.')
      })
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  if (!about) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{about.title}</h1>

      <img
        src={about.imageUrl}
        alt={about.imageAlt}
        width="300"
      />

      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default AboutUs
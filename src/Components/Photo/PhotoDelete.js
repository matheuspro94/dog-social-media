import React from 'react'
import styles from './PhotoDelete.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_DELETE } from '../../Api'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  const handleClick = async () => {
    const confirm = window.confirm('Você tem certeza que deseja excluir esta foto?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) {
        window.location.reload()
      }
    }
  }


  return (
    <>
      {loading ? (
        <button onClick={handleClick} className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  )
}

export default PhotoDelete
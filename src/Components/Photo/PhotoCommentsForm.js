import React from 'react';
import { COMMENT_POST } from '../../Api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })

    const { response, json } = await request(url, options)
    console.log(json);
    if (response.ok) {
      setComment('')
      setComments((comment) => [...comment, json])
    }

  }

  return <form onSubmit={handleSubmit}>
    <textarea
      id="comment"
      name="comment"
      placeholder='Deixe seu comentário...'
      value={comment}
      onChange={({ target }) => setComment(target.value)}
    />
    <button>
      <Enviar />
    </button>
    <Error error={error} />
  </form>;
};

export default PhotoCommentsForm;

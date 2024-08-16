
import { useParams } from 'react-router-dom';
import { animalChannelMap } from './animalChannelMap';

const AnimalPage = () => {
  const { id } = useParams<{ id: string }>();

  // Ensure 'id' is defined and use it to get the stream ID
  const animalData = id ? animalChannelMap[id] : undefined;

  // If animalData is undefined, show a message indicating that the animal or live stream is not found
  if (!animalData) {
    return <div>Live stream not found for {id}.</div>;
  }

  const { streamId } = animalData;

  return (
    <div>
      <h1>Live Stream for {id}</h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${streamId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`Live stream for ${id}`}
      ></iframe>
      <p>Enjoy the live stream of {id}!</p>
    </div>
  );
};

export default AnimalPage;

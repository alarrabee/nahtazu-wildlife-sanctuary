import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLiveStreams, fetchLiveStreamDetails } from './youtubeApi';
import { animalChannelMap } from './animalChannelMap';

const AnimalPage = () => {
  const { id } = useParams<{ id: string }>();
  const [liveStream, setLiveStream] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLiveStream = async () => {
      try {
        // Lookup the channel ID based on the animal ID
        const channelId = animalChannelMap[id];
        if (!channelId) {
          throw new Error('Channel ID not found for the selected animal.');
        }

        const streams = await fetchLiveStreams(channelId);
        if (streams.length > 0) {
          const streamId = streams[0].id.videoId;
          const streamDetails = await fetchLiveStreamDetails(streamId);
          setLiveStream(streamDetails);
        }
      } catch (error) {
        console.error('Error fetching live stream:', error);
      } finally {
        setLoading(false);
      }
    };

    getLiveStream();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!liveStream) {
    return <div>No live stream available.</div>;
  }

  return (
    <div>
      <h1>{liveStream.snippet.title}</h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${liveStream.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={liveStream.snippet.title}
      ></iframe>
      <p>{liveStream.snippet.description}</p>
    </div>
  );
};

export default AnimalPage;

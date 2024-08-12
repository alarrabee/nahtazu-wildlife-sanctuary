import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface PageData {
  title: string;
  extract: string;
}

interface AnimalChannel {
  channelId: string;
  streamId: string;
}

const animalChannelMap: { [key: string]: AnimalChannel } = {
  'tiger': {
    channelId: 'UCC5NfQ6Mf0dq_eEwv4P_hWA',
    streamId: 'iJBgkQbSZS4' 
  },
  'polar_bear': {
    channelId: 'UCC5NfQ6Mf0dq_eEwv4P_hWA', 
    streamId: 'CpsQzkGobTA' 
  },
  'ape': {
    channelId: 'UCC5NfQ6Mf0dq_eEwv4P_hWA',
    streamId: 'F_xdJ8K0i-k' 
  },
  'sea_otter': {
    channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    streamId: 'WrKZzs-CB_8'
  },
  'panda_bear': {
    channelId: 'UC2Sk0aXLq3ADkH_USGPKT_Q',
    streamId: '3szkFHfr6sA'
  },
  'penguin': {
    channelId: 'UC8NnosPOvXnm0O1u5YnLQiw',
    streamId: 'eXfpXKP6qVE'
  },
  'jellyfish': {
    channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    streamId: 'OMlf71t2oV0'
  },
  'elephant': {
    channelId: 'UC3DWrk_z1sH3ix1QNQTFr7w',
    streamId: 'VUJbDTIYlM4'
  },
  'red_panda': {
    channelId: 'UCQv8IYkfj8RAPDHGHivaQIA',
    streamId: 'e3EP1XCH0KQ'
  },
  'giraffe': {
    channelId: 'UCS9UBqaUtoIXUhX0J1BnxwQ',
    streamId: 'hNexlUkTTuc'
  },
  'manatee': {
    channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    streamId: 'yPSYdCWRWFA'
  },
  'sloth': {
    channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    streamId: 'g_L1Ay8P244'
  },
};

const AnimalProfile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [animalChannel, setAnimalChannel] = useState<AnimalChannel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const page = encodeURIComponent(name || '');
        const extractUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${page}&prop=extracts&exintro=&explaintext=&origin=*`;
        const response = await fetch(extractUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        const pageData = result.query.pages[Object.keys(result.query.pages)[0]];
        setData({
          title: pageData.title,
          extract: pageData.extract,
        });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set the correct animal channel data based on the name
    setAnimalChannel(animalChannelMap[name?.toLowerCase() || '']);

  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.extract}</p>

      {animalChannel && (
        <div>
          <h2>Live Stream</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${animalChannel.streamId}?autoplay=1`}
            title="YouTube live stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default AnimalProfile;

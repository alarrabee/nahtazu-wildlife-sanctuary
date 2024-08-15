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
  'ape': {
    channelId: 'UCC5NfQ6Mf0dq_eEwv4P_hWA',
    streamId: 'DHUnz4dyb54' 
  },
  'coral': {
    channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    streamId: 'DHUnz4dyb54' 
  },
  'elephant': {
    channelId: 'UC3DWrk_z1sH3ix1QNQTFr7w',
    streamId: 'VUJbDTIYlM4'
  },
  'giraffe': {
    channelId: 'UCS9UBqaUtoIXUhX0J1BnxwQ',
    streamId: 'hNexlUkTTuc'
  },
  'hummingbird': {
    channelId: 'UCK9WO9hqKmaAccZqCgeOw4w',
    streamId: 'pXe8MpU7uzk' 
  },
  'jellyfish': {
    channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ',
    streamId: 'OMlf71t2oV0'
  },
  'lion': {
    channelId: 'UCS9UBqaUtoIXUhX0J1BnxwQ',
    streamId: 'gTz_7tKUfYM' 
  },
  'manatee': {
    channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    streamId: 'yPSYdCWRWFA'
  },
  'owl': {
    channelId: 'UCzbydNAcB7jeJGssRFb_dCA',
    streamId: '6f-D2AjeEi0'
  },
  'penguin': {
    channelId: 'UC8NnosPOvXnm0O1u5YnLQiw',
    streamId: 'eXfpXKP6qVE'
  },
  'red panda': {
    channelId: 'UCQv8IYkfj8RAPDHGHivaQIA',
    streamId: 'e3EP1XCH0KQ'
  },
  'shark': {
    channelId: 'UCSyg9cb3Iq-NtlbxqNB9wGw',
    streamId: 'BLvr4K2eiRE'
  },
  'sloth': {
    channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    streamId: 'g_L1Ay8P244'
  },
  'tiger': {
    channelId: 'UCC5NfQ6Mf0dq_eEwv4P_hWA',
    streamId: 'iJBgkQbSZS4' 
  },
  'wolf': {
    channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw',
    streamId: '5e4lsEe4Vew' 
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

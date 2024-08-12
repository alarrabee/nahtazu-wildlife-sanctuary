import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface PageData {
  title: string;
  extract: string;
}

const AnimalProfile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
          extract: pageData.extract
        });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.extract}</p>
    </div>
  );
};

export default AnimalProfile;

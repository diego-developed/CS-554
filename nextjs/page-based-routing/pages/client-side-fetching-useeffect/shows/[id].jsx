import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
export default function ShowCS() {
  const router = useRouter();
  const {id} = router.query;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://api.tvmaze.com/shows/' + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No show data</p>;

  return (
    <>
      <div>
        <h1>{data.name} </h1>
        <p>
          {data.summary
            ? data.summary.replace(/(<([^>]+)>)/gi, '')
            : 'No Summary'}
        </p>
        <Image
          alt={data.name}
          src={
            data.image
              ? data.image.medium
              : 'https://patrickhill.nyc/images/me.jpg'
          }
          height={294}
          width={209}
        />
      </div>

      <style jsx>{`
        p::first-letter {
          font-size: 200%;
        }
      `}</style>
    </>
  );
}

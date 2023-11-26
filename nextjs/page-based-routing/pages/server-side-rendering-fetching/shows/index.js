import axios from 'axios';
import Link from 'next/link';
export default function shows({data}) {
  return (
    <>
      <h1>Server-side Rendering (SSR)</h1>
      <p>
        If a page uses Server-side Rendering, the page HTML is generated on each
        request. To use Server-side Rendering for a page, you need to export an
        async function called getServerSideProps. This function will be called
        by the server on every request.
      </p>
      <h1>Shows</h1>
      <ul>
        {data.map((show) => (
          <li key={show.id}>
            <Link href={`/server-side-rendering-fetching/shows/${show.id}`}>
              {show.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  const {id} = context.query;
  console.log(id);

  const {data} = await axios.get('http://api.tvmaze.com/shows');
  return {
    props: {data}
  };
}

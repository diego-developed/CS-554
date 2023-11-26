import axios from 'axios';
import Image from 'next/image';
import styles from '../../../styles/show.module.css';
export default function show({data}) {
  return (
    <>
      <div>
        <h1>{data.name} </h1>
        <p className={styles.showSummary}>
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
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  const {id} = context.query;
  console.log(id);

  const {data} = await axios.get('http://api.tvmaze.com/shows/' + id);
  console.log(`Fetched a show (getServerSideProps): ${data.name}`);
  return {
    props: {data}
  };
}

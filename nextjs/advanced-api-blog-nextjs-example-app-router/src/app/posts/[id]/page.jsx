import {postData} from '@/data/index.js';
import validation from '@/data/validation';
import Link from 'next/link';
import styles from './postdetails.module.css';
export default async function PostById({params}) {
  try {
    const data = await getData(params.id);
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        {data.tags.length > 0 ? (
          <div>
            <h3>Tags:</h3>
            <ul>
              {data.tags &&
                data.tags.map((tag) => {
                  return (
                    <li key={tag}>
                      <Link
                        className={styles.userPostLi}
                        href={`/posts/tag/${tag}`}
                      >
                        {tag}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          <div></div>
        )}
        <br />
        <br />
        <cite>
          <Link href={`/users/${data.poster.id.toString()}`}>
            By: {data.poster.firstName} {data.poster.lastName}
          </Link>
          <br />
          Post ID: {data._id.toString()}
        </cite>
      </div>
    );
  } catch (e) {
    return <div>{e}</div>;
  }

  async function getData(id) {
    id = await validation.checkId(id, 'ID URL Param');
    const post = await postData.getPostById(id);
    return post;
  }
}

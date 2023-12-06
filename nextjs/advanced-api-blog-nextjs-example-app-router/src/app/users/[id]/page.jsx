import {userData, postData} from '@/data/index.js';
import validation from '@/data/validation';
import Link from 'next/link';
export default async function UserById({params}) {
  try {
    const data = await getData(params.id);
    const postData = await getPostData(params.id);
    console.log('PostData', postData);
    return (
      <div>
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <div>User ID: {data._id.toString()}</div>
        <br />
        {postData.length > 0 ? (
          <div>
            <h3>Posts by {`${data.firstName} ${data.lastName}`}</h3>
            <ul>
              {postData &&
                postData.map((post) => {
                  return (
                    <li key={post._id.toString()}>
                      <Link href={`/posts/${post._id.toString()}`}>
                        {post.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  } catch (e) {
    console.log(e);
    return <div>{e}</div>;
  }

  async function getData(id) {
    id = await validation.checkId(id, 'ID URL Param');
    const user = await userData.getUserById(id);
    return user;
  }

  async function getPostData(id) {
    const userPosts = await postData.getPostsByUserId(id);
    return userPosts;
  }
}

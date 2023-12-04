'use client';
import styles from '@/app/form.module.css';
import {useFormState as useFormState} from 'react-dom';
import {useState, useEffect} from 'react';
import {createPost} from '@/app/actions';
const initialState = {
  message: null
};

export default function AddPostForm() {
  const [state, formAction] = useFormState(createPost, initialState);

  const [users, setusers] = useState(undefined);
  console.log('state', state);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users');
      const data = await response.json();
      let {userList} = data;
      console.log(userList);
      setusers(userList);
    }
    fetchData();
  }, []);

  return (
    <form action={formAction} className={styles.myform}>
      {state && state.message && (
        <ul
          aria-live='polite'
          className={`sr-only, ${styles.myUl}`}
          role='status'
        >
          {state.message.map((msg, index) => {
            return (
              <li className='error' key={index}>
                {msg}
              </li>
            );
          })}
        </ul>
      )}

      <div className='form-group'>
        <label className={styles.myLabel}>
          Post Title:{' '}
          <input className={styles.myInput} name='title' type='text' />
        </label>
      </div>

      <br />
      <div className='form-group'>
        <label className={styles.myLabel}>
          Post Body: <textarea className={styles.myInput} name='body' />
        </label>
      </div>

      <br />
      <div className='form-group'>
        <label className={styles.myLabel}>
          Poster:{' '}
          <select className={styles.myInput} name='posterId'>
            {users &&
              users.map((user) => {
                return (
                  <option
                    key={user._id.toString()}
                    value={user._id.toString()}
                  >{`${user.firstName} ${user.lastName}`}</option>
                );
              })}
          </select>
        </label>
      </div>
      <br />
      <div className='form-group'>
        <label className={styles.myLabel}>
          Tags <br />
          (Optional, multiple tags separated by comma):
          <input className={styles.myInput} name='tags' type='text' />
        </label>
      </div>
      <button className={styles.myButton} type='submit'>
        Add Post
      </button>
    </form>
  );
}

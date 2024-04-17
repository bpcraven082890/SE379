import Loading from './Loading';
import useFetch from '../hooks/useFetch';

// Display a list of posts
const FetchingData = () => {
    const {data : posts} = useFetch('posts');

    return (
        <div>
          <h1>Posts</h1>
          {posts.length ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          ) : ( <Loading /> )}
        
        </div>
      );
  };
  
  export default FetchingData;
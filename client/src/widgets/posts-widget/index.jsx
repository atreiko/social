import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from 'store'
import PostWidget from 'widgets/post-widget'

const PostsWidget = ({ userId, isProfile = false }) => {
  const posts = useSelector(state => state.posts)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isProfile) {
      getUserPosts()
    } else {
      getPosts()
    }

  }, []) // eslint-disabled-line react-hooks/exhaustive-deps

  const getPosts = async () => {
    const response = await fetch(
      'http://localhost:3141/posts',
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    const data = await response.json()
    dispatch(setPosts({ posts: data }))
  }

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3141/:${userId}/posts`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  }

  return (
    <>
      {posts.map(({ 
        _id,
        userId,
        firstName,
        lastName,
        description,
        location,
        picturePath,
        userPicturePath,
        likes,
        comments
      }) => (
        <PostWidget 
          key={_id}
          postId={_id}
          postUserId={userId}
          name={`${firstName} ${lastName}`}
          description={description}
          location={location}
          picturePath={picturePath}
          userPicturePath={userPicturePath}
          likes={likes}
          comments={comments}
        />
      ))}
    </>
  )
}

export default PostsWidget
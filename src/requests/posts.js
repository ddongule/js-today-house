export const requestGetPosts = async () => {
  const response = await fetch("http://localhost:1234/posts");
  const data = await response.json();

  return data;
};

export const requestGetPost = async (postId) => {
  const response = await fetch(`http://localhost:1234/posts/${postId}`);
  const data = await response.json();

  return data;
};

export const requestAddPost = async (post) => {
  await fetch(`http://localhost:1234/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(post),
  });

  window.location.assign("/posts.html");
};

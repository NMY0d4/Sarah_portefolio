export default async function getUserPosts() {
  const res = await fetch(`/api/posts`);

  // const posts = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

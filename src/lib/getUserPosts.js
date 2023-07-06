export default async function getUserPosts() {
  const res = await fetch(`${process.env.APP_URL}/api/posts`);
  console.log('ICIIII --->', process.env.APP_URL);
  // const posts = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

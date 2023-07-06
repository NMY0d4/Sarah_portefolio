export default async function getPostDetails(id) {
  const res = await fetch(`${process.env.APP_URL}/api/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

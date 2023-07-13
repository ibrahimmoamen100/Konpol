import Link from "next/link";

function Blog({ posts }) {
  if (!posts) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
          <Link href={`about/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Blog

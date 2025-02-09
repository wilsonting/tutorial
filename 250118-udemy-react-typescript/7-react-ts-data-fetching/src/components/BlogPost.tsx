export type BlogPost = {
  id: number;
  title: string;
  text: string;
};

type BlogPostsProps = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div id="blog-posts">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

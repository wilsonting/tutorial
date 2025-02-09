import { type ReactNode, useEffect, useState } from "react";
import "./App.css";
import BlogPosts, { BlogPost } from "./components/BlogPost";
import { get } from "./utils/https";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    //The only way to use asynchronous in effect function is by defining async function in effect function
    async function fetchPosts() {
      setIsFetching(true);

      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts123"
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });
        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }

      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;
  if (error) {
    content = <ErrorMessage text={error} />;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }
  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts.....</p>;
  }

  return (
    <main>
      <img src={fetchingImg} alt="Data fetching image" />
      {content}
    </main>
  );
}

export default App;

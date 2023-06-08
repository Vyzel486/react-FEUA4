import Link from "../../components/Links/RouterLink";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import Story from "./Story";

const Naujienos = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setIsLoading(false);
        setPosts(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Link to="/Naujienos">
        {/* <div className="naujienos">
          <Header />
          {isLoading && <p>Loading...</p>}
          {!isLoading && posts.length > 0 && <p>No news found..</p> && (
            <Story title={posts[0].title} body={posts[0].body} />
          )}
          {!isLoading && posts.length > 0 && <p>No news found..</p> && (
            <Story title={posts[1].title} body={posts[1].body} />
          )}
          <Footer />
        </div> */}

        <div>
        <Header />
        {isLoading && <p>Loading...</p>}
        {!isLoading && posts.length === 0 && <p>No news found..</p>}
        {posts.map((item) => (
          <Story title={item.title} body={item.body} />
        ))}
        <Footer />
        </div>
      </Link>
    </div>
  );
};

export default Naujienos;

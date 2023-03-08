import Head from "next/head";
import Link from "next/link";
import GithubCorner from "./GithubCorner";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sanity + Next.js = 💖</title>
      </Head>
      <nav>
        <Link href="/">
        <p> Movies</p>
        </Link>
        <Link href="/people">
           <p>People</p>
        </Link>
      </nav>
      {/* <GithubCorner /> */}
      <div id="main">{props.children}</div>
       <footer>
      <p>💖</p>
      </footer>
      <style jsx>{`
        footer {
          padding: 5rem 1rem;
          text-align: center;
          font-size: 2rem;
        }

        footer img {
          display: inline-block;
          height: 1em;
          width: auto;
          padding: 0 0.4em;
        }

        nav {
          position: fixed;
          display: flex;
          justify-content:center;
          gap:60px;
          align-items: center;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #333;
          font-size: 1rem;
          height: 3.5rem;
        }

        nav p {
          flex-grow: 1;
          color: #fff;
          text-decoration: none;
          text-align: center;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          padding: 3.5rem 0 0;
        }
      `}</style>
    </div>
  );
}

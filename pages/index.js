import Link from "next/link";
import Layout from "../comps/MyLayout";
import fetch from "isomorphic-unfetch";
import css from '../style.css'
const Index = props => (
  <Layout>
    <h1 style={css.example}>Batman tv show</h1>

    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return{
      shows: data.map(item => item.show)
  }
};
export default Index

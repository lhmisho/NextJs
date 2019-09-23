import { useRouter } from "next/router";
import Layout from "../../comps/MyLayout";
import fetch from "isomorphic-unfetch";

export default function Post() {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
      <img src={props.show.image.medium} />
      <p>This is the blog post content.</p>
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch("https://api.tvmaze.com/shows/${id}");
  const show = res.json();

  console.log(`Fetched show: ${show.name}`);
  return { show };
};

import React from "react";
import Link from "next/link";
import Layout from "../comps/MyLayout";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <p>I am from home</p>
          <p>Trying to learn next</p>
        </Layout>
      </div>
    );
  }
}

export default Home;

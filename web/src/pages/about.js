/* eslint-disable jsx-quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <h1>About me</h1>
        <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
      </Container>
    </Layout>
  );
}

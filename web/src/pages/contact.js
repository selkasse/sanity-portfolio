/* eslint-disable jsx-quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </Container>
    </Layout>
  );
}

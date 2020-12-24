/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";

const PortableText = ({ blocks }) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
);

export default PortableText;

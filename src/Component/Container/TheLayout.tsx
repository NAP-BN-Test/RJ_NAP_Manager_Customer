import React from "react";
import { Layout } from "antd";
import TheHeader from "./TheHeader";
import TheContent from "./TheContent";
import TheFooter from "./TheFooter";

function TheLayout() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
  return (
    <Layout>
      <TheHeader />
      <TheContent loading={loading} />
      <TheFooter />
    </Layout>
  );
}

export default TheLayout;

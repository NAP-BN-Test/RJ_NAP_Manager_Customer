import Layout from "antd/lib/layout/layout";
import React from "react";
import TheContent from "./TheContent";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

function TheLayout() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
  return (
    <Layout className="layout">
      <TheHeader />
      <TheContent loading={loading} />
      <TheFooter />
    </Layout>
  );
}

export default TheLayout;

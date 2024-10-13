import { memo } from "react";
import React from 'react';
import { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';
export default memo(function Index() {
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found'
  });
  return <>
      <PageMetadata title={title} />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>;
});
declare global {         
  interface Window {         
    globalCount: number;         
  }         
}

window.globalCount = 0;
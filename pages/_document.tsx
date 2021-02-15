import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';
import { GA_TRACKING_ID } from '../utils/gtag';

export default class MyDocument extends Document {
  render(): JSX.Element {
    const { primary } = theme(false).palette;
    return (
      <Html lang="en">
        <Head>
          <meta
            name="theme-color"
            content={'main' in primary ? primary.main : undefined}
          />
          <meta
            name="description"
            content="Clips is a flexible clipboard manager for Mac and Windows. It stores everything you copy and keeps your clipboard history organized."
          ></meta>
          <meta property="og:title" content="Clips - Clipboard Manager"></meta>
          <meta
            property="og:description"
            content="Clips is a flexible clipboard manager for Mac and Windows. It stores everything you copy and keeps your clipboard history organized."
          ></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://infiniticlips.com"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>

          {/* <meta
            property="og:image"
            content="https://infiniticlips.com/app.png"
          ></meta> */}
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:100,300,400,500,700,900&display=swap"
          /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:200,300,400,500,700,900&display=swap"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });`,
            }}
          />
        </Head>
        <body
          style={{
            margin: 0,
            padding: 0,
            maxWidth: '100%',
            overflowX: 'hidden',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

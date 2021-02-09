import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

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
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:100,300,400,500,700,900&display=swap"
          /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:200,300,400,500,700,900&display=swap"
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

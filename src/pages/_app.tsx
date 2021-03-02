import GlobalStyle from "../styles/GlobalStyle";
import App from 'next/app';
export default class MyApp extends App {

  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if(Component.getInitialProps) {
      pageProps = await Component.getInititalProps(ctx);
    }
    return { pageProps }
  }
  render() {
    const { Component }: any = this.props;
    const { pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
  
}


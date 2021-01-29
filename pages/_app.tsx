/* eslint-disable react/no-danger */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../shared/components/loader';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
    const handleStart = (url) => url !== Router.asPath && setLoading(true);

    const handleComplete = (url) => url !== Router.asPath && setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  });
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Head>
        <title>Harsh Goel | Software Developer</title>
        <meta name="title" content="Harsh Goel | Software Developer" />
        <meta
          name="description"
          content="Harsh Goel is a Software Developer from Dhanbad, Jharkhand. Harsh is pursuing his undergraduate from SRM University, Chennai."
        />
        <meta
          name="keywords"
          content="Harsh Goel, Software Developer , Web Development Freelancer, SRM University, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Harsh Goel" />
        <meta name="copyright" content="All rights reserved,2020. Harsh Goel" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harshgoel.me/" />
        <meta property="og:title" content="Harsh Goel | Software Developer" />
        <meta
          property="og:description"
          content="Harsh Goel is a Software Developer from Dhanbad, Jharkhand. Harsh is pursuing his undergraduate from SRM University, Chennai."
        />
        <meta property="og:image" content="./src/img/harsh-banner.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harshgoel.me/" />
        <meta property="twitter:title" content="Harsh Goel | Software Developer" />
        <meta
          property="twitter:description"
          content="Harsh Goel is a Software Developer from Dhanbad, Jharkhand. Harsh is pursuing his undergraduate from SRM University, Chennai."
        />
        {/* Use Billboard to get an OG Image */}
        <meta
          property="twitter:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Harsh%20Goel&subtitle=Software%20Developer&fileType=jpeg&theme=dark&fontSize=180px"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2595CLJE11" />
        <script
          dangerouslySetInnerHTML={{
            __html: `       
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-2595CLJE11');`
          }}
        />
      </Head>
      <AnimatePresence>
        <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
          <motion.div
            transition={spring}
            key={router.pathname}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            id="page-transition-container">
            <Component {...pageProps} key={router.pathname} />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;

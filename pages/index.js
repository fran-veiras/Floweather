/* eslint-disable @next/next/no-page-custom-font */
import { Container, Heading } from '@chakra-ui/react';
import { Header } from '../components/Header/Header';

export default function Home(props) {
  console.log(props);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&family=Spline+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/places`);
  const data = await res.json();

  if (!data) {
    const withSsl = await fetch(`https://localhost:3000/api/places`);
    const dataSsl = await withSsl.json();

    return {
      props: { dataSsl },
    };
  }

  return {
    props: { data },
  };
}

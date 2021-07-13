import styled from 'styled-components';
import styles from '../styles/Home.module.css';

import Head from 'next/head';
import Link from 'next/link';

const HeaderMessage = styled.div`
  background-color: blanchedalmond;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eCommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo e Bem-vinda ao nosso eCommerce
        </h1>
        <h2>
          <Link href="/list">
            <a>Lista de Produtos</a>
          </Link>
        </h2>
      </main>
      <footer className={styles.footer}>
        <HeaderMessage>
          <span>eCommerce</span>
          <span>Compre aqui tudo o que precisa</span>
          <span>
            Criado por Gabriel Zerbine para o curso Bootcamp React do IGTI
          </span>
        </HeaderMessage>
      </footer>
    </div>
  );
}

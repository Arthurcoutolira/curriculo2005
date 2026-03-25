import Link from 'next/link';
import styles from './home.module.css';

export default function Curriculo() {
  return (
    <div className={styles.container}>
      <Link href="/jogo" className={styles.botaoLink}>🎮 Ir para o Jogo da Forca</Link>

      <main className={styles.card}>
        <header className={styles.header}>
          <img src="/fotocurriculo.jpg" alt="Arthur Lira" className={styles.fotoPerfil} />
          <h1>Arthur Couto Lira</h1>
          <p>Ciência da Computação | UNICAP</p>
          <p>Recife, PE | arthur.couto.lira@gmail.com</p>
        </header>

        <section className={styles.section}>
          <h2>Sobre Mim</h2>
          <p>Estudante de Ciência da Computação (4º período). Busco aplicar conhecimentos acadêmicos em situações práticas e projetos inovadores.</p>
        </section>

        <section className={styles.section}>
          <h2>Formação</h2>
          <p><strong>Universidade Católica de Pernambuco</strong></p>
          <p>Bacharelado em Ciência da Computação | 2024 - 2028</p>
        </section>

        <section className={styles.section}>
          <h2>Projetos e Experiência</h2>
          <p>• Representante Acadêmico de Ciência da Computação - UNICAP</p>
          <p>• Robótica Inclusiva: Protótipos com Arduino e Eletrônica</p>
          <p>• Gerenciamento e Modelagem de Banco de Dados (MySQL)</p>
          <p>• Análise de Processos em Escritório de Advocacia</p>
        </section>

        <section className={styles.section}>
          <h2>Habilidades</h2>
          <p>C, Python, Java, MySQL, GitHub, VS Code, Excel, Desenvolvimento Digital.</p>
        </section>
      </main>
    </div>
  );
}
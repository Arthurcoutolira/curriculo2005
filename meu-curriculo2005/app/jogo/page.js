"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../home.module.css';
import Boneco from './Boneco';

const PALAVRAS = ['REACT', 'NEXTJS', 'PYTHON', 'GITHUB', 'UNICAP', 'JAVASCRIPT', 'ARTHUR', 'CODIGO', 'DADOS', 'RECIFE', 'LOGICA', 'SOFTWARE', 'BANCO', 'SISTEMAS', 'CIENCIA', 'ELETRONICA', 'CELULAR', 'INTERNET', 'NODEJS', 'VARIAVEL', 'FUNCAO', 'ARRAY', 'OBJETO', 'CSS', 'HTML', 'MYSQL', 'EXCEL', 'ARDUINO', 'DESENVOLVIMENTO', 'PROJETO'];

export default function Jogo() {
  const [palavra, setPalavra] = useState('');
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);

  const iniciar = () => {
    setPalavra(PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)]);
    setLetrasUsadas([]);
    setErros(0);
  };

  useEffect(() => { iniciar(); }, []);

  const chutar = (l) => {
    if (letrasUsadas.includes(l) || erros >= 6) return;
    setLetrasUsadas([...letrasUsadas, l]);
    if (!palavra.includes(l)) setErros(erros + 1);
  };

  const exibicao = palavra.split('').map(l => letrasUsadas.includes(l) ? l : '_').join(' ');
  const venceu = palavra !== '' && !exibicao.includes('_');
  const perdeu = erros >= 6;

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.botaoLink}>← Voltar ao Currículo</Link>
      <div className={styles.card} style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Jogo da Forca</h2>
        <Boneco erros={erros} />
        <div className={styles.palavra}>{exibicao}</div>
        <div className={styles.teclado}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => (
            <button key={l} className={styles.botaoLetra} onClick={() => chutar(l)} 
                    disabled={letrasUsadas.includes(l) || venceu || perdeu}>{l}</button>
          ))}
        </div>
        {(venceu || perdeu) && (
          <div style={{marginTop: '20px'}}>
            <p style={{color: venceu ? '#4ade80' : '#f87171', fontWeight: 'bold'}}>
              {venceu ? "🎉 Você Venceu!" : `💀 Perdeu! A palavra era: ${palavra}`}
            </p>
            <button onClick={iniciar} className={styles.botaoLink} style={{border:'none', cursor:'pointer', marginTop: '10px'}}>Jogar de novo</button>
          </div>
        )}
      </div>
    </div>
  );
}
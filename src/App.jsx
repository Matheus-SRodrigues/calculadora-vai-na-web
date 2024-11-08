import { useState } from "react";

export default function Main() {
  const [primeiroValor, setPrimeiroValor] = useState(null);
  const [segundoValor, setSegundoValor] = useState(null);
  const [resultado, setResultado] = useState("Insira os valores e escolha uma operação");

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const somar = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtrair = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const dividir = () => {
    if (segundoValor === 0) {
      setResultado("Erro: divisão por zero");
    } else {
      setResultado(primeiroValor / segundoValor);
    }
  };

  return (
    <main>
      <div>
      <img src="./logo.svg" alt="Logo" />
      </div>
      <h1>Calculadora Vai na Web</h1>
      <section>
        <div id="entrada">
          <input
            type="number"
            placeholder="Primeiro número"
            onChange={capturandoPrimeiroValor}
          />
          <input
            type="number"
            placeholder="Segundo número"
            onChange={capturandoSegundoValor}
          />
        </div>
        <div id="botoes">
          <button onClick={somar}>+</button>
          <button onClick={subtrair}>-</button>
          <button onClick={multiplicar}>x</button>
          <button onClick={dividir}>%</button>
        </div>
        <p id="resultado">{resultado}</p>
      </section>
    </main>
  );
}

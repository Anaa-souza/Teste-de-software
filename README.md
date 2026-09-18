# 🧪 Testes de Software — Carrinho de Compras

<p align="center">
  <img src="./assets/testing.gif" width="400">
</p>

<p align="center">
  <strong>Atividade de testes, identificação de bugs e correção de código em JavaScript.</strong>
</p>

---

## 📌 Sobre a atividade

Nesta atividade foi realizado um conjunto de testes em um sistema de **carrinho de compras**, com o objetivo de verificar se os cálculos estavam sendo realizados corretamente.

Foram criados **6 casos de teste**, cada um verificando uma situação diferente do sistema.

A partir dos resultados dos testes, foi possível identificar alguns erros no código e realizar as correções necessárias.

---

## 🎯 Objetivo

O objetivo da atividade foi:

- 🔎 Identificar erros no código;
- 🧪 Criar e executar casos de teste;
- 📊 Comparar o resultado esperado com o resultado obtido;
- 🔧 Corrigir os problemas encontrados;
- ✅ Executar os testes novamente;
- 📈 Verificar os resultados após as correções.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| 🟨 **JavaScript** | Desenvolvimento da função |
| 🟩 **Node.js** | Execução do projeto |
| 🧪 **Jest** | Realização dos testes |
| 💻 **VS Code** | Desenvolvimento e execução |

---

## 📂 Estrutura do projeto

```text
📁 projeto
│
├── 📄 carrinho.js
├── 📄 carrinho.test.js
│
└── 📁 assets
    ├── 🖼️ testing.gif
    └── 🖼️ jest.gif
```

### 📄 `carrinho.js`

Contém a função `calcularTotal()`, responsável por calcular o valor final do carrinho.

### 🧪 `carrinho.test.js`

Contém os testes utilizados para verificar se a função estava funcionando corretamente.

---

## 🧪 Casos de teste

Foram utilizados 6 casos de teste para verificar diferentes situações do carrinho:

| ID | Cenário | Status Inicial | Status Final |
|---|---|---|---|
| **CT-01** | Frete grátis para compra de R$ 100 | ❌ FALHOU | ✅ PASSOU |
| **CT-02** | Aplicação de cupom de 10% | ❌ FALHOU | ✅ PASSOU |
| **CT-03** | Quantidade negativa | ✅ PASSOU | ✅ PASSOU |
| **CT-04** | Arredondamento dos centavos | ❌ FALHOU | ✅ PASSOU |
| **CT-05** | Carrinho vazio | ✅ PASSOU | ✅ PASSOU |
| **CT-06** | Frete para compra abaixo de R$ 100 | ✅ PASSOU | ✅ PASSOU |

---

## 🐛 Problemas encontrados

Durante a execução dos testes foram encontrados alguns problemas no código.

### 1. Validação dos produtos

O código não verificava corretamente se a quantidade era menor ou igual a zero ou se o preço era negativo.

### 2. Cupom de desconto

O cupom `PROMO10` estava descontando **R$ 10 fixos**, quando deveria aplicar **10% de desconto** sobre o subtotal.

### 3. Frete grátis

A condição estava considerando apenas valores **maiores que R$ 100**.

O correto era considerar também compras de **exatamente R$ 100**.

### 4. Arredondamento

O valor final não estava sendo arredondado para duas casas decimais.

---

## 🔧 Correções realizadas

Depois de analisar os resultados, os problemas foram corrigidos no arquivo `carrinho.js`.

Foram ajustadas a validação dos produtos, o cálculo do desconto, a regra do frete grátis e o arredondamento do valor final.

Depois disso, os testes foram executados novamente para conferir se os resultados estavam corretos.

---

## 📊 Antes x Depois

### ❌ Antes das correções

```text
CT-01 → FALHOU
CT-02 → FALHOU
CT-03 → PASSOU
CT-04 → FALHOU
CT-05 → PASSOU
CT-06 → PASSOU
```

### ✅ Depois das correções

```text
CT-01 → PASSOU
CT-02 → PASSOU
CT-03 → PASSOU
CT-04 → PASSOU
CT-05 → PASSOU
CT-06 → PASSOU
```

<p align="center">
  <img src="./assets/jest.gif" width="350">
</p>

---

## 📋 Matriz de GOT

Foi utilizada uma **Matriz de GOT (Guia de Ordem de Testes)** para registrar os testes realizados.

Nela foram organizados:

- ID do teste;
- Cenário/regra;
- Dados de entrada;
- Resultado esperado;
- Resultado obtido;
- Status inicial;
- Status final.

A matriz permitiu comparar a situação do sistema **antes e depois das correções**.

---

## 💻 Como executar os testes

Com os arquivos do projeto abertos no VS Code, abra o terminal e execute:

```bash
npm test
```

Caso necessário, também pode ser utilizado:

```bash
npx jest
```

O Jest irá executar os casos de teste e mostrar no terminal quais passaram e quais apresentaram erro.

---

## 📈 Resultado final

Após as correções, os **6 casos de teste passaram**.

```text
╔══════════════════════════╗
║     RESULTADO FINAL      ║
╠══════════════════════════╣
║ CT-01       ✅ PASSOU    ║
║ CT-02       ✅ PASSOU    ║
║ CT-03       ✅ PASSOU    ║
║ CT-04       ✅ PASSOU    ║
║ CT-05       ✅ PASSOU    ║
║ CT-06       ✅ PASSOU    ║
╚══════════════════════════╝
```

---

## 🎓 Conclusão

Com essa atividade foi possível entender melhor como os testes ajudam a encontrar erros no código. Primeiro foram identificados os problemas, depois eles foram corrigidos e os testes foram executados novamente para verificar os resultados.

No final, todos os casos de teste passaram corretamente.

---

<p align="center">
  🧪 <strong>Testes de Software</strong> • JavaScript • Jest
</p>

<p align="center">
  Desenvolvido para atividade acadêmica
</p>

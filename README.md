# 🎁 Challenge ONE - Amigo Secreto

Este repositório contém a minha solução para o desafio do **Amigo Secreto**, proposto no curso da **Oracle Next Education (ONE)**.

O objetivo principal foi praticar **lógica de programação** e **manipulação do DOM com JavaScript**. Consegui aplicar diversos conceitos aprendidos até agora e também ir além com alguns extras que achei interessantes adicionar.

---

## 💡 Objetivo do Projeto

Desenvolver uma aplicação simples onde podemos:

* Adicionar amigos a uma lista
* Evitar nomes duplicados
* Sortear aleatoriamente um amigo
* Reiniciar o sorteio
* Remover amigos da lista
* Melhorar a experiência do usuário com interações simples

---

## 🛠️ Tecnologias Utilizadas

* HTML
* CSS
* JavaScript (puro, sem frameworks)

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:

   ```
   git clone https://github.com/najort1/Challange-ONE-Amigo-secreto.git
   ```

2. Acesse a pasta do projeto:

   ```
   cd Challange-ONE-Amigo-secreto
   ```

3. Abra o arquivo `index.html` em qualquer navegador:

   * Pode ser só dar dois cliques no arquivo, ou
   * Utilizar alguma extensão de servidor local como o **Live Server** no VS Code

---

## 📌 Funcionalidades

### ✅ Adicionar Amigos

* O nome é capturado via input
* Verifica se o campo está vazio
* Verifica se o nome já foi adicionado usando `.includes()`
* Após adicionar, o input é limpo automaticamente
* Também é possível adicionar pressionando **Enter**, sem clicar no botão

### 🗑️ Remover Amigos

* Cada nome adicionado aparece com um botão "Remover"
* Clicando no botão, o amigo é removido da lista

### 🔄 Reiniciar Sorteio

* Limpa completamente a lista de amigos

### 🎲 Sortear Amigo

* Sorteia um nome aleatoriamente usando `Math.random()` + `Math.floor()`
* Exibe o nome do amigo sorteado na tela
* Se não houver nenhum nome, aparece uma mensagem de erro

---

## 🧪 Extras que Adicionei

* Estilizei o botão de remover para ficar mais visível
* Adicionei evento de teclado no input para facilitar a adição com Enter
* Mensagens de feedback em cores diferentes para sucesso ou erro

---

## 🧠 O que Aprendi

* Manipulação do DOM com `getElementById`, `createElement`, `appendChild`
* Uso de arrays e suas funções como `.push()`, `.includes()`, `.splice()`
* Trabalhar com eventos (`click`, `keydown`)
* Lógica de sorteio com `Math.random()` e `Math.floor()`
* Boas práticas como limpar campos após uso e dar feedback visual ao usuário

---

## 📚 Próximos Passos

* Implementar o sorteio "entre amigos", tipo amigo secreto real (A sorteia B, B sorteia C...)
* Melhorar a responsividade com CSS
* Armazenar a lista em `localStorage` para não perder ao recarregar
* Adicionar uma estilização mais bonita, moderna e animada com CSS
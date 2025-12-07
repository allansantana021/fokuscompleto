# 📱 FOKUS – Aplicativo de Produtividade e Gestão do Tempo

O **Fokus** é um aplicativo mobile desenvolvido em **React Native** utilizando **Expo**, criado para ajudar usuários a melhorar sua produtividade através da técnica Pomodoro. Além disso, o app inclui funcionalidades de lista de tarefas e consulta de CEP, fornecendo um ambiente completo de organização.

---

## 🚀 Visão Geral

O Fokus combina ciclos de foco, ferramentas de organização e utilidades de consulta, tudo em uma interface simples e intuitiva.  
Ele utiliza navegação por gaveta (Drawer) e conta com módulos independentes para cada funcionalidade.

---

## 🧩 Funcionalidades

### ⏳ **1. Timer Pomodoro**
Implemente sua rotina de foco com três modos predefinidos:

- **Foco:** 25 minutos  
- **Pausa Curta:** 5 minutos  
- **Pausa Longa:** 15 minutos  

O ciclo pode ser reiniciado, pausado ou ajustado conforme o fluxo de trabalho.

---

### 📝 **2. Lista de Tarefas (To-Do List)**
Organize suas atividades diárias:

- Criar, visualizar e excluir tarefas  
- Separação automática entre tarefas **concluídas** e **pendentes**  
- Número sequencial para novos itens  

---

### 🏙️ **3. Busca de CEP (ViaCEP)**
Localize endereços no Brasil de forma rápida:

- Busca a partir de um CEP informado  
- Integração com a API pública **ViaCEP**  
- Retorna logradouro, bairro, cidade e UF  

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **Expo Router** (navegação)
- **react-native-svg** (ícones personalizados)
- **StyleSheet** nativo para estilização

---

## 📦 Instalação e Execução

### ✔️ **Pré-requisitos**
Certifique-se de ter:

- **Node.js** instalado  
- **Expo CLI**  
  ```bash
  npm install -g expo-cli

# FOKUS: APLICATIVO DE PRODUTIVIDADE E GESTÃO DE TEMPO

## Visão Geral do Projeto

O Fokus é um aplicativo móvel desenvolvido em React Native utilizando o *framework* Expo, concebido para auxiliar os usuários na otimização da produtividade e na gestão eficaz do tempo. O projeto se baseia no princípio de dividir o trabalho em intervalos focados, complementado por ferramentas auxiliares de organização.

-----

## Funcionalidades Principais

O aplicativo oferece as seguintes funcionalidades centrais, acessíveis através de um menu de navegação por gaveta (*Drawer Navigation*):

### 1\. Timer Pomodoro

O módulo principal implementa a técnica Pomodoro para gerenciamento de tempo. O usuário pode alternar entre três modos de temporizador com durações predefinidas:

  * **Foco:** 25 minutos.
  * **Pausa Curta:** 5 minutos.
  * **Pausa Longa:** 15 minutos.

### 2\. Lista de Tarefas (To-Do List)

Este módulo é dedicado à organização e acompanhamento de tarefas diárias.

  * Permite a criação, visualização e exclusão de tarefas.
  * As tarefas são automaticamente segregadas em listas de **Não Concluídas** e **Concluídas**, facilitando o acompanhamento visual do progresso.
  * A contagem de itens é tratada de forma sequencial para novos registros.

### 3\. Buscador de CEP (ViaCEP)

Funcionalidade utilitária para consulta de endereços no Brasil.

  * Permite a busca de endereços completos a partir de um Código de Endereçamento Postal (CEP).
  * Utiliza a API pública ViaCEP para obter dados como logradouro, bairro, cidade e Unidade Federativa (UF).

-----

## Tecnologias Envolvidas

O projeto é construído utilizando uma *stack* moderna de desenvolvimento mobile:

  * **Plataforma:** React Native.
  * **Estrutura:** Expo.
  * **Roteamento:** Expo Router, que gerencia a navegação entre as telas.
  * **Estilização:** Módulos `StyleSheet` nativos do React Native.
  * **Ícones:** Componentes SVG personalizados utilizando a biblioteca `react-native-svg`.

-----

## Instalação e Execução

Para configurar e rodar o projeto em seu ambiente de desenvolvimento, siga as instruções abaixo:

### Pré-requisitos

Certifique-se de que as seguintes ferramentas estejam instaladas em seu sistema:

  * **Node.js:** Versão compatível com o Expo.
  * **Expo CLI:** Instalação global via npm (`npm install -g expo-cli`).

### 1\. Instalação de Dependências

Navegue até o diretório do projeto (`fokus-completo`) e instale as dependências listadas no `package.json`:

```bash
npm install
# ou
yarn install
```

### 2\. Inicialização do Projeto

Inicie o servidor de desenvolvimento do Expo:

```bash
npx expo start
```

### 3\. Acesso ao Aplicativo

Após a inicialização, o console exibirá um QR Code. Use o aplicativo **Expo Go** em seu dispositivo móvel (Android ou iOS) para escanear o código e carregar o aplicativo, ou utilize um emulador/simulador configurado para iniciar a aplicação.
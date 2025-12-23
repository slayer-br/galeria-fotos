# Galeria de Fotos Intergalácticas

![Demonstração do Projeto](/galeria-fotos/assets/galeria-fotos-desktop.gif)

Este é um projeto de uma galeria de fotos simples, construído com Next.js, React e TypeScript, e estilizado com Tailwind CSS. O projeto exibe uma grade de imagens e, ao clicar em uma delas, a imagem é exibida em um modal.

## Tecnologias Utilizadas

*   [Next.js](https://nextjs.org/)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/slayer-br/galeria-fotos.git
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:3000/galeria-fotos](http://localhost:3000/galeria-fotos) em seu navegador para ver o resultado.

## Deploy

O deploy é realizado automaticamente via **GitHub Actions** sempre que há um push na branch `main`.
O site está disponível em: [https://slayer-br.github.io/galeria-fotos/](https://slayer-br.github.io/galeria-fotos/)

## Scripts Disponíveis

No diretório do projeto, você pode executar:

*   `npm run dev`: Executa o aplicativo em modo de desenvolvimento.
*   `npm run build`: Compila o aplicativo para produção.
*   `npm run start`: Inicia um servidor de produção.
*   `npm run lint`: Executa o linter para verificar a qualidade do código.

## Estrutura do Projeto

*   `src/app/page.tsx`: A página principal da aplicação.
*   `src/components/PhotoItem.tsx`: Componente que renderiza cada foto na grade.
*   `src/components/Modal.tsx`: Componente que exibe a imagem em um modal.
*   `src/data/photoList.ts`: Uma lista de dados das fotos.
*   `src/types/Photo.ts`: A tipagem para o objeto de foto.
*   `public/assets`: A pasta onde as imagens das fotos estão armazenadas.
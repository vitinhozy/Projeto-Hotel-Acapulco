Link Direto para acesso ao site: https://vitinhozy.github.io/Projeto-Hotel-Acapulco/
# Hotel Acapulco 🏨

Bem-vindo ao site oficial do **Hotel Acapulco**! Este é o repositório do projeto que representa o site de um hotel, focado na experiência do usuário, funcionalidades administrativas e integração com formulários de terceiros.

---

## Estrutura Geral 🌐

O sistema é composto por múltiplas páginas HTML, estilizadas por arquivos CSS e com funcionalidades implementadas em JavaScript.

**Objetivo**: Representar o site de um hotel com foco em:
- Experiência do usuário.
- Funcionalidades administrativas.
- Integração com formulários de terceiros.

---

## Componentes do Sistema 🛠️

### 2.1. Página Principal (index.html) 🏡

**Descrição**: Apresenta as informações iniciais sobre o hotel, incluindo um catálogo de quartos, promoções e a seção de reservas.

#### Seções Principais:
- **Header**: Contém o logotipo, nome do hotel e uma barra de navegação com links para outras páginas.
- **Catálogo de Quartos**: Exibe quatro tipos de acomodações, cada uma com imagem, descrição, preço e botão "VER MAIS".
- **Promoção VIP**: Convida os usuários a se cadastrarem no programa de fidelidade.
- **Reservas**: Exibe as informações de contato e um botão para acessar o formulário de reservas.
- **Footer**: Contém informações de direitos autorais.

#### Observações Técnicas:
- **Acessibilidade**: Uso do atributo `alt` nas imagens para melhorar a acessibilidade.
- **Responsividade**: Implementada com CSS Flexbox.
- **JavaScript**: Função `scrollToSection(id)` usada para navegação suave entre seções.

---

### 2.2. Página "Sobre Nós" (sobreNos.html) 📖

**Descrição**: Apresenta informações detalhadas sobre o hotel, incluindo histórico e descrição das acomodações.

#### Seções Principais:
- **Introdução**: Breve história do hotel.
- **Detalhamento das Acomodações**: Destaca os diferenciais das acomodações.

#### JavaScript:
- Função `scrollToNext()` para rolar suavemente para a próxima seção.

---

### 2.3. Página de Login (login.html) 🔑

**Descrição**: Permite que os administradores acessem a intranet para gerenciar reservas.

#### Funcionalidades:
- Validação de usuário e senha.
- Redirecionamento para a página da intranet em caso de sucesso.
- Feedback de erro no login.

#### JavaScript:
- Validação de login com comparação de valores fixos (`validUser` e `validPassword`).

#### Estilização:
- Formulário centralizado com campos estilizados e foco nos campos para melhor experiência visual.

---

### 2.4. Página da Intranet (intranet.html) 🖥️

**Descrição**: Permite o cadastro, visualização e exclusão de reservas. Inclui um botão de logout que redireciona o usuário à página inicial.

#### Funcionalidades:
- **Cadastro de Reservas**: Nome do cliente deve conter apenas letras e espaços. Dias e valor da diária devem ser maiores que zero.
- **Atualização de Reservas**: Cálculo de valores acumulados.
- **Exclusão de Reservas**: Opção de "Dar Baixa" nas reservas.
- **Logout**: Botão de logout com redirecionamento para a página inicial.

#### JavaScript (Logout):
- Função associada ao botão `#logout-btn` para redirecionamento ao site inicial.

#### Estilização:
- Formulário simples e acessível. Lista de reservas com botões de exclusão.

---

## Estilização 🎨

### Arquivos CSS:
- **index.css**: Estilização da página principal, com background fixo e elementos como botões e cards.
- **sobreNos.css**: Estilos específicos para a página "Sobre Nós", com design clean e responsivo.
- **login.css**: Layout moderno para o formulário de login.
- **intranet.css**: Layout funcional para cadastro e gerenciamento de reservas.

### Técnicas Utilizadas:
- **Flexbox**: Layout responsivo.
- **Paleta de Cores**: Tons de verde, preto e branco.
- **Transições Suaves**: Para botões e elementos interativos.

---

## Funcionalidades em JavaScript 🖱️

### 4.1. Funções Utilizadas:
- **Navegação Suave**: `scrollToSection(id)` e `scrollToNext()` para melhorar a experiência de navegação.
- **Validação de Formulários**: Uso de regex para garantir entradas consistentes.
- **Manipulação do DOM**: Adição, atualização e exclusão de elementos como listas de reservas.
- **Redirecionamento**: `window.location.href` para navegação entre páginas.

---

## Boas Práticas Implementadas ✅

- **SEO**: Uso de meta tags como viewport e charset, títulos específicos para cada página.
- **Acessibilidade**: Textos alternativos (`alt`) em imagens, cores contrastantes para melhor leitura.
- **Código Limpo**: Identação correta e nomes de classes intuitivos. Separação de responsabilidades entre HTML, CSS e JavaScript.

---

## Instruções 📋

### Para Visualizar o Projeto:
1. Inicie o **Live Server**.
2. Acesse o arquivo **index.html**.

### Acesso à Intranet:
- **Usuário**: admin
- **Senha**: 12345

Após acessar os arquivos, inicie o Live Server através do `index.html`.

---

## Contribuições 🤝

Sinta-se à vontade para contribuir com melhorias e correções!

---

## Licença 📜

Este projeto está licenciado sob a [Licença MIT](LICENSE).

Projeto: Hotel Acapulco 🏨
Hotel Acapulco - Website Oficial
Para melhor acesso ao Website, observe as instruções ao final desta documentação.

1. Estrutura Geral 🌐
O sistema é composto por múltiplas páginas HTML, estilizadas por arquivos CSS e com funcionalidades implementadas em JavaScript.
🎯 Objetivo: Representar o site de um hotel, com foco na experiência do usuário, funcionalidades administrativas e integração com formulários de terceiros.

2. Componentes do Sistema 🛠️
2.1. Página Principal (index.html) 🏡
Descrição:
Apresenta as informações iniciais sobre o hotel, incluindo um catálogo de quartos, promoções e a seção de reservas.

Seções Principais:
Header: Inclui o logotipo, nome do hotel e uma barra de navegação com links para outras páginas.
Catálogo de Quartos: Mostra quatro tipos de acomodações disponíveis, cada uma com imagem, descrição, preço e botão "VER MAIS".
Promoção VIP: Convida os usuários a se cadastrarem no programa de fidelidade.
Reservas: Exibe as informações de contato do hotel e um botão para acessar o formulário de reservas.
Footer: Contém informações de direitos autorais.
⚙️ Observações Técnicas:

Acessibilidade: Uso do atributo alt em imagens para melhorar a acessibilidade.
Responsividade: Implementada para adaptar-se a diferentes tamanhos de tela com CSS Flexbox.
JavaScript: Função scrollToSection(id) usada para navegação suave entre seções.
2.2. Página "Sobre Nós" (sobreNos.html) 📖
Descrição:
Apresenta informações detalhadas sobre o hotel, incluindo histórico e descrição das acomodações.

Seções Principais:
Introdução: Breve história do hotel.
Detalhamento das Acomodações: Destaca os diferenciais das acomodações.
📜 JavaScript:

Função scrollToNext() para rolar suavemente para a próxima seção.
2.3. Página de Login (login.html) 🔑
Descrição:
Permite que os administradores acessem a intranet para gerenciar reservas.

Funcionalidades:
Validação de usuário e senha.
Redirecionamento para a página de intranet em caso de sucesso.
Feedback para erros no login.
📜 JavaScript:

Validação do login com comparação de valores fixos (validUser e validPassword).
🎨 Estilização:

Formulário centralizado com campos estilizados.
Foco nos campos para melhor experiência visual.
2.4. Página da Intranet (intranet.html) 🖥️
Descrição:
Permite o cadastro, visualização e exclusão de reservas e inclui um botão de logout para redirecionamento à página inicial.

Funcionalidades:
Cadastro de Reservas:
Nome do cliente deve conter apenas letras e espaços.
Dias e valor da diária devem ser maiores que zero.
Atualização de reservas: Cálculo de valores acumulados.
Exclusão de Reservas:
Opção de "Dar Baixa" em reservas, removendo-as da lista.
Logout:
Botão posicionado no header que exibe um alerta e redireciona o usuário para a página inicial (index.html).
📜 JavaScript (Logout):

Função associada ao botão #logout-btn para redirecionar ao site inicial.
🎨 Estilização:

Formulário com design simples e acessível.
Lista de reservas estilizada com botões para exclusão.
3. Estilização 🎨
Arquivos CSS:
index.css: Estilização da página principal, com background fixo e elementos como botões e cards.
sobreNos.css: Configurações específicas para a página "Sobre Nós", com design clean e responsivo.
login.css: Layout moderno para o formulário de login.
intranet.css: Layout funcional para cadastro e gerenciamento de reservas.
Técnicas Utilizadas:
Uso extensivo de Flexbox para layout responsivo.
Paleta de cores consistente (tons de verde, preto e branco).
Transições suaves para botões e elementos interativos.
4. Funcionalidades em JavaScript 🖱️
4.1. Funções Utilizadas:
Navegação Suave:
scrollToSection(id) e scrollToNext() para melhorar a experiência de navegação.
Validação de Formulários:
Uso de regex para garantir entradas consistentes.
Manipulação do DOM:
Adição, atualização e exclusão de elementos como listas de reservas.
Redirecionamento:
window.location.href para navegação entre páginas.
5. Boas Práticas Implementadas ✅
SEO:
Uso de meta tags como viewport e charset.
Títulos específicos para cada página.
Acessibilidade:
Textos alternativos (alt) em imagens.
Cores contrastantes para melhor leitura.
Código Limpo:
Identação correta e nomes de classes intuitivos.
Separação de responsabilidades entre HTML, CSS e JavaScript.
6. Instruções 📋
Para Visualizar o Projeto:
Inicie o Live Server e acesse o arquivo index.html.

Acesso à Intranet:

Usuário: admin
Senha: 12345
Instruções
Ao realizar o acesso dos arquivos, acesse o live server pelo index.html

Para acessar a intranet utilize o login: admin e a senha: 12345.

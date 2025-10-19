# 💜 Conecta ONG | Plataforma de Voluntariado e Doações

Plataforma web construída para conectar ONGs verificadas a voluntários e doadores, simplificando o processo de apoio ao Terceiro Setor. O projeto segue um rigoroso conjunto de Especificações Técnicas Obrigatórias, garantindo um sistema de design robusto e layouts responsivos avançados.

## ✨ Funcionalidades Principais

O projeto implementa uma interface completa com as seguintes seções:

* **Página Inicial (Index):** Apresentação do propósito da plataforma e destaques de projetos e campanhas.
* **ONGs e Projetos:** Páginas de listagem de organizações e iniciativas ativas, com uso de Tags para categorização.
* **Voluntariado:** Listagem de vagas em aberto, com filtros por habilidade e período.
* **Doações:** Seção dedicada a campanhas em destaque e formulário de doação direta.
* **Cadastro:** Formulários separados para cadastro de ONGs e Voluntários.
* **Navegação Sofisticada:** Menu principal com Submenu Dropdown e Navegação Mobile com Menu Hambúrguer.

## ⚙️ Conformidade com as Especificações Técnicas

O projeto atende 100% a todas as Especificações Técnicas Obrigatórias, utilizando padrões modernos de Front-end:

### Design System (CSS)

* **Design System com Variáveis CSS:** Todo o estilo é baseado em variáveis customizadas (`:root`) definidas em `_design-system.css`, abrangendo cores, tipografia, e espaçamento.
* **Tipografia e Paleta:** Implementação de uma hierarquia tipográfica de 6 tamanhos de fonte e uma paleta de cores com 10 variáveis, atendendo ao requisito mínimo de 8 cores.
* **Espaçamento Modular:** Utilização de um sistema de espaçamento baseado em módulos de 8px (variáveis `--spacing-1` a `--spacing-6`).

### Layout e Responsividade

* **CSS Grid e Flexbox:** Uso de CSS Grid (classe `.grid-12-columns`) para o layout principal e Flexbox para componentes internos e alinhamentos.
* **5 Breakpoints:** Definição e aplicação de 5 *media queries* distintas em `_layout.css`, garantindo a adaptação completa a dispositivos móveis e desktops.

### Componentes de Interface

* **Feedback ao Usuário (Modals):** Componente de Modal implementado em `_feedback.css` e acionado via `script.js` após a submissão de formulários (`cadastro.html`, `contato.html`, etc.).
* **Badges e Tags:** Sistema de categorização `.tag` em `_components.css` aplicado nas listagens de ONGs, projetos e vagas.
* **Botões com Estados Visuais:** Estilização completa para os estados `:hover`, `:focus`, `:active` e `:disabled`.

---

## 🚀 Como Executar o Projeto

O projeto é inteiramente Front-end e não requer servidor ou bibliotecas externas.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DanielaBarbosadosSantos/Conecta-ONG-Atividade-2-CSS3
    ```
2.  **Abra o arquivo `index.html`** no seu navegador de preferência.

### 📁 Estrutura de Arquivos CSS

Os estilos são modulares e organizados em arquivos específicos:

* `style.css`: Arquivo principal que importa todos os demais.
* `_design-system.css`: Core do Design System (Variáveis).
* `_layout.css`: Estrutura (Grid, Flexbox, Media Queries).
* `_components.css`: Estilos de componentes (Botões, Cards, Nav, Tags).
* `_feedback.css`: Estilos dos componentes de feedback (Modals, Toasts).
* `_utils.css`: Classes de utilidade.

---

## 🤝 Contato

Se você tiver dúvidas ou sugestões, por favor, abra uma *Issue* no repositório.

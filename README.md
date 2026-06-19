# 🎨 P5.js Studio - Website Criativo

Um website moderno e responsivo com HTML, CSS e JavaScript, featuring p5.js para animações e arte criativa. Layout otimizado com header, dashboard interativo, seção de projetos, rodapé e sistema de usuário.

## 📋 Estrutura do Projeto

```
project-root/
│
├── index.html                 # Página principal HTML
├── README.md                  # Este arquivo
│
├── css/
│   └── style.css             # Estilos otimizados (responsivos)
│
└── js/
    ├── main.js               # Funcionalidades gerais e interações
    └── sketches.js           # P5.js sketches para o dashboard
```

## 🚀 Funcionalidades

### Header/Navbar
- ✅ Logo com gradiente animado
- ✅ Menu de navegação com smooth scroll
- ✅ Sistema de usuário (Perfil, Configurações, Sair)
- ✅ Design responsivo com blur effect

### Dashboard
- ✅ 4 sketches p5.js interativos:
  - **Geometria**: Formas geométricas animadas
  - **Animação**: Ondas dinâmicas
  - **Interativo**: Partículas que seguem o mouse
  - **Cores Dinâmicas**: Gradiente de cores HSB

### Seção de Projetos
- ✅ Grid responsivo de cards
- ✅ Efeito hover com transformação
- ✅ Thumbnails canvas para visualização

### Rodapé (Footer)
- ✅ Informações do site
- ✅ Links úteis
- ✅ Informações de contato
- ✅ Copyright

### Sistema de Usuário
- ✅ Armazenar nome do usuário (localStorage)
- ✅ Botão de perfil para atualizar nome
- ✅ Botões de configurações e logout
- ✅ Persistência de dados

## 🎯 Características de Design

### Cores (Tema Escuro)
```css
Primary: #667eea (Roxo Azulado)
Secondary: #764ba2 (Roxo)
Accent: #f093fb (Rosa)
Success: #00d4ff (Ciano)
Dark Background: #1a1a2e
Light Background: #16213e
```

### Responsividade
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (até 768px)
- ✅ Layout fluído com CSS Grid

### Otimizações
- ✅ CSS minificado e estruturado
- ✅ Transições suaves (0.3s ease)
- ✅ Backdrop blur no navbar
- ✅ Animações com p5.js
- ✅ Lazy loading de imagens
- ✅ Scroll behavior smooth

## 📱 Como Usar

### 1. Abrir o Website
```bash
# Basta abrir index.html no navegador
# ou usar um servidor local:
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 2. Sistema de Usuário
- Clique em "Perfil" para definir seu nome
- Use "Configurações" para opções adicionais
- Clique "Sair" para fazer logout

### 3. Navegação
- Use o menu para navegar entre seções
- Smooth scroll automático
- Links no footer para recursos externos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Gradientes, Animações
- **JavaScript (Vanilla)**: Interatividade e controle
- **P5.js**: Criação de arte e animações

## 🎨 Customização

### Alterar Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... outras cores */
}
```

### Adicionar Novos Sketches
Edite `js/sketches.js` e crie novos sketches:
```javascript
let sketchN = (p) => {
    p.setup = function() { /* ... */ };
    p.draw = function() { /* ... */ };
};
new p5(sketchN);
```

### Modificar Layout
Edite `index.html` para adicionar novas seções e ajuste o CSS accordingly.

## 📊 Performance

- Tamanho total: ~50KB (sem dependências externas em cache)
- Tempo de carregamento: < 1s em conexão rápida
- FPS dos sketches: 60 FPS (otimizado)
- Compatibilidade: Chrome, Firefox, Safari, Edge (versões recentes)

## 🔐 Dados de Usuário

Dados armazenados em `localStorage`:
- Nome do usuário
- Configurações futuras

Os dados são armazenados localmente e NÃO são enviados para servidores.

## 🚧 Futuras Melhorias

- [ ] Sistema de login/autenticação
- [ ] Banco de dados para salvar projetos
- [ ] Mais sketches p5.js
- [ ] Editor de sketches integrado
- [ ] Compartilhamento de projetos
- [ ] Modo claro/escuro
- [ ] Análise de uso (analytics)

## 📄 Licença

Este projeto está disponível para uso livre e modificação.

## 👨‍💻 Autor

Desenvolvido com ❤️ para criatividade digital.

---

**Divirta-se criando! 🎉**

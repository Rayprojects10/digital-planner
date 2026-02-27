# Digital Planner

Um planejador digital moderno com foco em experiência visual, organização e produtividade — desenvolvido com HTML, CSS e JavaScript puro.

# Visão Geral

O Digital Planner é uma aplicação web desenvolvida com foco em:
-Interface moderna (Glassmorphism + Gradientes)
-Experiência fluida com microinterações
-Organização visual clara
-Código limpo e bem estruturado
-Persistência local de dados

# Design System

O projeto utiliza um sistema de design baseado em CSS Custom Properties (Variáveis CSS):

:root {
  --bg: #0f0f11;
  --card: rgba(255, 255, 255, 0.05);
  --accent: #7c5cff;
  --alta: #ff4d4d;
  --media: #ffaa00;
  --baixa: #00c896;
}

# Recursos Visuais Implementados

-Dark Mode / Light Mode dinâmico
-Glassmorphism com backdrop-filter
-Gradientes modernos
-Sistema visual de prioridades por cores
-Animações suaves com transition
-Microinterações em hover
-Barra de progresso animada
-Layout responsivo com CSS Grid

# Funcionalidades

📅 Calendário interativo

➕ Adição de tarefas
✔ Marcação como concluída
🎯 Sistema de prioridades (Alta, Média, Baixa)
📊 Barra de progresso dinâmica
🌗 Alternância entre tema claro e escuro
💾 Salvamento automático com LocalStorage

# Arquitetura Front-End
O projeto segue separação clara de responsabilidades:

HTML → Estrutura semântica
CSS → Sistema visual e layout
JavaScript → Manipulação de estado e DOM

# Conceitos Aplicados

-CSS Variables para escalabilidade
-Grid Layout para estrutura principal
-Flexbox para alinhamentos internos
-Manipulação dinâmica do DOM
-Persistência com LocalStorage
-Controle visual por classes condicionais

# Responsividade
A aplicação utiliza:

@media (max-width: 900px) {
  main {
    grid-template-columns: 1fr;
  }
}

Garantindo adaptação para dispositivos móveis e tablets.

# Decisões Técnicas
Por que JavaScript?

O objetivo foi consolidar domínio sobre:
-Manipulação direta do DOM
-Controle manual de estado
-Estruturação de lógica sem abstrações externas
-Entendimento do funcionamento da web

# Diferenciais Técnicos
-Sistema de temas usando CSS Variables
-Feedback visual imediato em interações
-Hierarquia visual clara
-Código organizado e legível
-Transições suaves para melhor UX
-Indicadores visuais de prioridade
-Barra de progresso dinâmica baseada em estado

# Link
https://my-web-digital-plannercom.vercel.app/

# Autora

Rayane Vanessa 
Desenvolvedora Front-End

GitHub: https://github.com/Rayprojects10

🇺🇸
# English Version

# Digital Planner
A modern digital planner focused on visual experience, organization, and productivity — built using pure HTML, CSS, and JavaScript.

# Overview
-Digital Planner is a web application developed with a strong focus on:
-Modern interface (Glassmorphism + Gradients)
-Smooth user experience with microinteractions
-Clear visual organization
-Clean and well-structured code
-Local data persistence

# Design System

The project uses a design system based on CSS Custom Properties (CSS Variables):
:root {
  --bg: #0f0f11;
  --card: rgba(255, 255, 255, 0.05);
  --accent: #7c5cff;
  --alta: #ff4d4d;
  --media: #ffaa00;
  --baixa: #00c896;
}

# Implemented Visual Features
-Dynamic Dark Mode / Light Mode
-Glassmorphism using backdrop-filter
-Modern gradient styling
-Color-based priority system
-Smooth animations with transition
-Hover microinteractions
-Animated progress bar
-Responsive layout using CSS Grid

# Features
📅 Interactive calendar
➕ Task creation
✔ Mark tasks as completed
🎯 Priority system (High, Medium, Low)
📊 Dynamic progress bar
🌗 Light/Dark theme toggle
💾 Automatic saving with LocalStorage

# Front-End Architecture
The project follows a clear separation of responsibilities:
HTML → Semantic structure
CSS → Visual system and layout
JavaScript → State management and DOM manipulation

# Applied Concepts
-CSS Variables for scalability
-CSS Grid for main layout structure
-Flexbox for internal alignment
-Dynamic DOM manipulation
-LocalStorage persistence
-Visual state control through conditional classes

# Responsiveness
The application uses:
@media (max-width: 900px) {
  main {
    grid-template-columns: 1fr;
  }
}

# Technical Decisions
Why JavaScript?
The goal was to strengthen core knowledge of:
-Direct DOM manipulation
-Manual state control
-Structuring logic without external abstractions
-Understanding how the web works at a fundamental level

# Technical Highlights
-Theme system implemented with CSS Variables
-Immediate visual feedback on user interactions
-Clear visual hierarchy
-Organized and readable code
-Smooth transitions for improved UX
-Visual priority indicators
-State-based dynamic progress bar

# Live Demo
https://my-web-digital-plannercom.vercel.app/

# Author
Rayane Vanessa
Front-End Developer

GitHub: https://github.com/Rayprojects10

// Main JavaScript - Funcionalidades Gerais

// Definir nome do usuário
document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName') || 'Artista';
    document.getElementById('user-name').textContent = userName;
    
    // Event Listeners para User Menu
    setupUserMenu();
    
    // Smooth Scroll para navegação
    setupSmoothScroll();
});

// Setup User Menu
function setupUserMenu() {
    const profileBtn = document.getElementById('profile-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userNameElement = document.getElementById('user-name');

    profileBtn.addEventListener('click', () => {
        const newName = prompt('Digite seu nome:');
        if (newName && newName.trim()) {
            localStorage.setItem('userName', newName);
            userNameElement.textContent = newName;
            alert('Perfil atualizado com sucesso!');
        }
    });

    settingsBtn.addEventListener('click', () => {
        alert('Configurações abertos!\n\nEm desenvolvimento...');
    });

    logoutBtn.addEventListener('click', () => {
        if (confirm('Deseja sair?')) {
            localStorage.removeItem('userName');
            alert('Você saiu com sucesso!');
            location.reload();
        }
    });
}

// Smooth Scroll Navigation
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Adicionar animação ao scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.dashboard-item, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Logger para Debugging
console.log('✨ P5.js Studio Carregado com Sucesso!');
console.log('👤 Usuário:', localStorage.getItem('userName') || 'Visitante');

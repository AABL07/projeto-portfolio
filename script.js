document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Verifica se o modo escuro estava ativado anteriormente e mantém a preferência do usuário
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
        darkModeToggle.setAttribute("aria-pressed", "true");
    } else {
        darkModeToggle.textContent = "🌙";
        darkModeToggle.setAttribute("aria-pressed", "false");
    }

    // Alterna entre os modos claro e escuro e salva a preferência no localStorage
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");

        if (isDarkMode) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️";
            darkModeToggle.setAttribute("aria-pressed", "true");
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙";
            darkModeToggle.setAttribute("aria-pressed", "false");
        }
    });

    // Seleciona todas as seções e os links do menu
    const sections = document.querySelectorAll(".card");
    const menuLinks = document.querySelectorAll("nav ul li a");

    // Função para exibir apenas a seção ativa
    function showSection(sectionId) {
        const section = document.getElementById(sectionId);

        // Verifica se a seção existe antes de tentar manipulá-la
        if (!section) {
            console.error(`Seção "${sectionId}" não encontrada.`);
            return;
        }

        sections.forEach(sec => sec.classList.remove("active"));
        section.classList.add("active");
    }

    // Adiciona eventos aos links do menu para troca de seções
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1).trim(); // Melhorado para obter o ID corretamente
            showSection(sectionId);
        });
    });

    // Exibir a seção "Início" por padrão
    showSection("inicio");
});

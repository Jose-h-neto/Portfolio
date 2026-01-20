// Dados dos projetos
const projetosData = {
    "agrovittae": {
        titulo: "Agrovittae Nutritech",
        videoUrl: "https://streamable.com/e/b8i45n?autoplay=1&muted=1", // Preciso usar o link /e/ para embed
        ano: "2024",
        descricao: "Website corporativo desenvolvido para a Agrovittae Nutritech.<br> Implementei uma interface intuitiva para exibição de produtos da empresa. O projeto seguiu a identidade visual da marca, garantindo uma experiência de usuário consistente e agregando valor à empresa por meio de um design responsivo e ágil",
        techs: ["WordPress", "Figma"],
        link: "https://agrovittae.com.br"
    }
    // Basta adicionar outros projetos seguindo a mesma estrutura
};

// Seleção de elementos
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeModalBtn = document.querySelector(".close-modal");

// Função para abrir o modal
function abrirModal(id) {
    const data = projetosData[id];

    if (data) {
        modalBody.innerHTML = `
            <div class="modal-wrapper">
                <div class="modal-main-content">
                    <div class="modal-left">
                        <div class="video-container">
                            <iframe src="${data.videoUrl}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="modal-techs" style="margin-top: 20px;">
                            ${data.techs.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>

                    <div class="modal-right">
                        <h2>${data.titulo}</h2>
                        <p class="modal-description">${data.descricao}</p>
                    </div>
                </div>

                <div class="modal-footer">
                    <a href="${data.link}" target="_blank" class="modal-link-btn">Acessar Projeto</a>
                </div>
            </div>
        `;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}
// Configuração dos cliques nos botões
document.addEventListener("DOMContentLoaded", () => {
    // Escuta cliques em qualquer lugar do documento (Event Delegation)
    document.addEventListener("click", (e) => {
        // Se o que foi clicado for o botão de projeto
        if (e.target.classList.contains("project-btn") && e.target.hasAttribute("data-project")) {
            const id = e.target.getAttribute("data-project");
            abrirModal(id);
        }
    });

    // Fechar no X
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Fechar ao clicar fora (no fundo escuro)
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Animação para o Nome
    new Typed('#typed-name', {
        strings: ['JOSÉ NETO'],
        typeSpeed: 100,
        showCursor: false, // Remove o tracinho piscante se não quiser no nome
        startDelay: 500,
    });

    // Animação para as Stacks (com efeito de apagar e trocar)
    new Typed('#typed-stack', {
        strings: [
            'Desenvolvedor Web Front-end e Back-end',
            '| Next.js | React.js | Node.js'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000, // Tempo que o texto fica parado antes de apagar
        loop: true, // Faz a animação ficar rodando infinitamente
        cursorChar: '|', // O caractere que pisca
    });
});
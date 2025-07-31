document.addEventListener('DOMContentLoaded', () => {

    /**
     * Controla a abertura e o fecho do menu de navegação em tela cheia.
     */
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const fullscreenNav = document.getElementById('fullscreen-nav');
    const navLinks = document.querySelectorAll('.fullscreen-nav a');

    if (menuToggle && fullscreenNav && closeMenu) {
        menuToggle.addEventListener('click', () => {
            fullscreenNav.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            fullscreenNav.classList.remove('active');
        });

        // Fecha o menu ao clicar num link (útil para navegação na mesma página)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                fullscreenNav.classList.remove('active');
            });
        });
    }


    /**
     * Configuração do Particles.js para o novo tema tático.
     * As partículas são mais subtis e com uma cor neutra.
     */
    // Verifica se a biblioteca particlesJS foi carregada antes de a usar
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50, // Menos partículas para um visual mais limpo
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#4F5B66" // Cor primária (cinza ardósia)
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.8,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5,
                    "random": true,
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 200,
                        "size": 4,
                        "duration": 2,
                        "opacity": 0.8
                    }
                }
            },
            "retina_detect": true
        });
    }


    /**
     * Simula a atualização do contador de jogadores online.
     * A lógica permanece a mesma da versão anterior.
     */
    function simulatePlayerCount() {
        const playersOnlineElement = document.getElementById('players-online');
        if (playersOnlineElement) {
            const iconElement = playersOnlineElement.querySelector('i');
            // Verifica se o ícone existe antes de continuar
            if (iconElement) {
                const iconHTML = iconElement.outerHTML;
                const currentPlayersText = playersOnlineElement.innerText;
                // Remove todos os caracteres não numéricos para obter o número de forma segura
                let currentPlayers = parseInt(currentPlayersText.replace(/[^0-9]/g, ''));

                if (!isNaN(currentPlayers)) {
                    let variation = Math.floor(Math.random() * 5) - 2;
                    currentPlayers += variation;
                    if (currentPlayers < 1000) currentPlayers = 1000 + Math.floor(Math.random() * 10);
                    playersOnlineElement.innerHTML = `${iconHTML} ${currentPlayers.toLocaleString('pt-BR')}`;
                }
            }
        }
    }

    setInterval(simulatePlayerCount, 5000);

});

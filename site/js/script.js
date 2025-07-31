/**
 * Configuração do Particles.js para criar um efeito de brasas ou faíscas subindo.
 * Este efeito adiciona uma camada dinâmica e agressiva ao fundo do site.
 */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // Quantidade de partículas na tela
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#d42900" // Cor primária (vermelho agressivo)
        },
        "shape": {
            "type": "circle", // Formato das partículas
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false, // Desabilita linhas entre as partículas para um efeito mais limpo
        },
        "move": {
            "enable": true,
            "speed": 1.2, // Velocidade do movimento
            "direction": "top", // Movimento para cima, como brasas
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
                "mode": "repulse" // Partículas se afastam do mouse
            },
            "onclick": {
                "enable": false,
            },
            "resize": true
        }
    },
    "retina_detect": true
});


/**
 * Simula a atualização do contador de jogadores online.
 * No ambiente de produção, este valor deve ser obtido de uma API do seu servidor de jogos.
 * Esta função serve como um placeholder visual para dar a sensação de um site "vivo".
 */
function simulatePlayerCount() {
    const playersOnlineElement = document.getElementById('players-online');
    if (playersOnlineElement) {
        // Extrai o ícone e o texto separadamente
        const iconHTML = playersOnlineElement.querySelector('i').outerHTML;
        let currentPlayers = parseInt(playersOnlineElement.innerText.replace(/,/g, ''));

        // Simula uma pequena variação de jogadores (entre -2 e +2)
        let variation = Math.floor(Math.random() * 5) - 2;
        currentPlayers += variation;
        
        // Garante que o número não fique irrealista
        if (currentPlayers < 1000) currentPlayers = 1000 + Math.floor(Math.random() * 10);

        // Atualiza o elemento mantendo o ícone
        playersOnlineElement.innerHTML = `${iconHTML} ${currentPlayers.toLocaleString('pt-BR')}`;
    }
}

// Atualiza a contagem a cada 5 segundos (5000 milissegundos)
setInterval(simulatePlayerCount, 5000);

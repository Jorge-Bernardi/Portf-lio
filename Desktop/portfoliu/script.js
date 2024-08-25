document.addEventListener('DOMContentLoaded', () => {
    const speedInput = document.getElementById('speed');
    const speedValue = document.getElementById('speed-value');

    function updateOrbitAnimationDuration() {
        const speed = speedInput.value;
        speedValue.textContent = speed;
        
        // Calculando a duração da animação em segundos
        const duration = (101 - speed) + 's';

        // Atualizando a duração da animação para todos os planetas
        document.querySelectorAll('.planet').forEach(planet => {
            planet.style.animationDuration = duration;
        });
    }

    // Inicializa a duração da animação com o valor padrão do controle deslizante
    updateOrbitAnimationDuration();

    // Adiciona um evento para atualizar a duração da animação sempre que o controle deslizante for movido
    speedInput.addEventListener('input', updateOrbitAnimationDuration);
});


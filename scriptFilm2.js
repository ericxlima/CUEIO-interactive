window.onload = function() {
    
    var video1 = document.getElementById('video1');
    var video5 = document.getElementById('video5');

    var btnIniciar = document.getElementById('btn-iniciar');
    var container_input_text = document.getElementById('container-input-text');
    var btnEnviar = document.getElementById('btn-enviar');

    var respostaFinal = document.getElementById('resposta');

    function iniciarVideo() {
        // Esconde o vídeo 1 e botão iniciar
        btnIniciar.style.display = 'none';
        video1.style.display = 'none';
        video5.style.display = 'block';
        video5.muted = false;
        // Play no vídeo no time 10
        video5.play();
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    btnIniciar.addEventListener('click', function() {
        iniciarVideo();
    })

    video5.addEventListener('timeupdate', function() {
        if(video5.currentTime > 22 && video5.currentTime < 23){
            video5.pause();
            container_input_text.style.display = 'block';
        }
    });

    btnEnviar.addEventListener('click', function() {
        // console.log('timeupdate', video5.currentTime);
        var input_text = document.getElementById('input-text');
        var resposta = input_text.value;
        if(resposta == 'Space'){
            window.open('https://www.youtube.com/watch?v=Yla6z8CX7lU&t=10s', '_blank');
        } else {
            container_input_text.style.display = 'none';
            video5.currentTime = 23;
            video5.play();
            respostaFinal.innerHTML = `A resposta <b>${resposta}</b> é uma resposta errada`;
            respostaFinal.style.display = 'block';
        }
    });
}

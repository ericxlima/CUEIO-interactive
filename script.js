window.onload = function() {

    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    var video3 = document.getElementById('video3');
    var video4 = document.getElementById('video4');
    
    var btnIniciar = document.getElementById('btn-iniciar');
    var btnOi = document.getElementById('btn-oi');
    var btnCenoura = document.getElementById('btn-cenoura');
    var btnInsistir = document.getElementById('btn-insistir');
    var btnVoltar = document.getElementById('btn-voltar');

    var textGameOver = document.getElementById('game-over');

    function game_over() {
        textGameOver.style.display = "block";
    }

    function reset() {
        video1.muted = false;
        video1.play();
        btnIniciar.style.display = 'none';
        btnOi.style.display = 'block';
        btnCenoura.style.display = 'block';
        btnVoltar.style.display = 'none';
        btnInsistir.style.display = 'none';
    }

    btnIniciar.addEventListener('click', function() {
        reset();
    })

    btnVoltar.addEventListener('click', function() {
        reset();
    })

    btnInsistir.addEventListener('click', function() {
        video1.style.display = 'none';
        video4.muted = false;
        video4.style.display = 'block';
        video4.play();
        btnVoltar.style.display = 'none';
        btnInsistir.style.display = 'none';
        
        video4.addEventListener('ended', function() {

            game_over();
            video1.muted = false;
        });
    })

    btnOi.addEventListener('click', function() {
        video1.style.display = 'none';
        video2.style.display = 'block';
        video2.muted = false;
        video2.play();
        btnOi.style.display = 'none';
        btnCenoura.style.display = 'none';

        video2.addEventListener('ended', function() {
            video2.pause()
            video2.style.display = 'none';
            video1.style.display = 'block';
            video1.muted = false;
            video1.play();
            btnOi.style.display = 'block';
            btnCenoura.style.display = 'block';
        });
    })

    btnCenoura.addEventListener('click', function() {
        video1.style.display = 'none';
        video3.style.display = 'block';
        video3.muted = false;
        video3.play();
        btnOi.style.display = 'none';
        btnCenoura.style.display = 'none';

        video3.addEventListener('ended', function() {
            video3.pause()
            video3.style.display = 'none';
            video1.style.display = 'block';
            video1.muted = false;
            video1.play();
            btnVoltar.style.display = 'block';
            btnInsistir.style.display = 'block';

        });
    });
}
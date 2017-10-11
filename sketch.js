window.addEventListener('keydown', keyPressed);

      function keyPressed(e){
        var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
        var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
        // console.log(key);

        if(!audio){
          return;
        }

        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
      }

      var keys = document.querySelectorAll('.key');
      for(var i = 0; i < keys.length; i++){
        keys[i].addEventListener('transitionend', removeTransform);
      }

      function removeTransform(e){
        // console.log(this);
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');


      }


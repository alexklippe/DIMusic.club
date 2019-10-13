function radioToogle() {
    var btn = document.getElementById("btnPlay");
    var player = document.getElementById("track");
    if (!player.paused) {
      btn.innerHTML = '<i class="fa fa-play" aria-hidden="true">';
      player.pause();
    } else {
      btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true">';
      player.play();
    }
  }
  
  function radioVolume() {
    var player = document.getElementById("track");
    player.volume = document.getElementById("vol").value;
  }
  
  function radioShuffle() {
    var radioList = new Array('http://listen.shoutcast.com/89fmaradiorock$http://radioonline.89radiorock.com.br/assets/site/img/logotipo.png$https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png', 'http://icy.unitedradio.it/RMCItalia.mp3$http://www.radiomontecarlo.net/resizer/112/112/true/1474622909566.jpg--.jpg?1474622911000$http://www.worldatlas.com/webimage/flags/countrys/zzzflags/itlarge.gif','http://icecast-streaming.nice264.com/ondacero$http://static.ondacero.es/img/logo-ondacero.png$http://static.donquijote.org/images/culture/spanish_flag2.jpg');
  
    var next = Math.floor((Math.random() * radioList.length));
    var player = document.getElementById("track");
  
    var next = radioList[next].split("$");
  
    document.getElementById("radioLogo").src = next[1];
    document.getElementById("radioCountry").src = next[2];
    player.src = next[0];
    player.play();
  }
  
  function toogleSize(){
    if ($(".radioInfo").css("display") == "none") {
      $(".radioInfo").css("display", "block");
    } else {
      $(".radioInfo").css("display", "none");
    }
  }
 <!-- Footer -->
 <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>A</span>ditha <span>D</span>inuja <span>Serasinghe</span></h1>
      </div>
      <h2>All are updated in the world :)</h2>
      <div class="social-icon">
        <div class="social-item">
          <a target="_blank" rel="noopener" href="https://web.facebook.com/adserasinghe"><img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></a>
        </div>
        <div class="social-item">
          <a target="_blank" rel="noopener" href="https://www.instagram.com/adserasinghe"><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a>
        </div>
        <div class="social-item">
          <a target="_blank" rel="noopener" href="https://api.whatsapp.com/send/?phone=94718896042&text&type=phone_number&app_absent=0"><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
        <div class="social-item">
        <a target="_blank" rel="noopener" href="https://www.youtube.com/@aditha_creation/"><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/></a>
        </div>
        <div class="social-item">
          <a target="_blank" rel="noopener" href="https://twitter.com/adserasinghe"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/></a>
          </div>
        <div class="social-item">
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/adserasinghe"><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
          </div>
          <div class="social-item">
            <a target="_blank" rel="noopener" href="https://open.spotify.com/user/31yae5mucnitkgqqnj6tj6ucnmxy"><img width="48" height="48" src="https://img.icons8.com/fluency/48/spotify.png" alt="spotify"/></a>
          </div>
        <div class="social-item">
        <a target="_blank" rel="noopener" href="https://github.com/adserasinghe"><img width="48" height="48" src="https://img.icons8.com/color-glass/48/github--v1.png" alt="github--v1"/></a>
        </div>
        <div class="social-item">
        <a target="_blank" rel="noopener" href="https://www.behance.net/adserasinghe"><img width="48" height="48" src="https://img.icons8.com/color/48/behance.png" alt="behance"/></a>
        </div>
        <div class="social-item">
          <a target="_blank" rel="noopener" href="https://linktr.ee/adserasinghe"><img width="48" height="48" src="https://img.icons8.com/color/48/source-code.png" alt="source-code"/></a>
        </div>
      </div>
      <p>&copy by <span class="yearJS"></span><b> Aditha Dinuja Serasinghe (V:1.0.5.7)</b> All rights reserved. This Website hosted  <b> ♥ </b> With github Pages</p>
    </div>
  </section>
  <!-- End Footer -->

  
</body>

  <script src="./JS/app.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="./JS/custom.js"defer></script>
  <script src="./JS/kursor.js"></script>
  <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="floating-wpp.js"></script>
  <!---Mouse Coursor Script--->
  <script>
    var kursorx = new kursor({
      type: 2,
      color: 'rgba(118,67,67)',
    })
  
  
    function mouseenter () {
      kursorx.hidden()
    }
    function mouseleave () {
      kursorx.hidden(false)
    }
    function clickx() {
      kursorx.color('rgba(100,0,100)')
      kursorx.hidden()
    }
    function clickx2() {
      kursorx.color('rgba(100,0,100)')
      kursorx.hidden(false)
    }
    function clickx(){
      kursor2.color('rgb(0,0,0)')
      kursor2.hidden(false)
    }
    function clickx2(){
      kursor2.color('rgb(0,0,0)')
      kursor2.hidden()
    }
    var kursor2 = new kursor({
      el: '.caja',
      color: 'rgba(128,0,0)',
      type: 2,
    })
  </script>
<!---End of Mouse Coursor Script--->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<!--Typing Effect Script-->
<script>
  const text = document.querySelector(".auto-type");
  const textLoad = () => {
      setTimeout(() => {
          text.textContent = "Developer";
      }, 0);
      setTimeout(() => {
          text.textContent = "Designer";
      }, 4000);
      setTimeout(() => {
          text.textContent = "YouTuber";
      }, 8000); //1s = 1000 milliseconds
  }
  textLoad();
  setInterval(textLoad, 12000);
</script>    
<!--End of typing Effect Script-->
<!--Pre Loader Script-->
<script>
  var loader=document.getElementById("Preloader");

  window.addEventListener("load", function(){
    loader.style.display ="none";
  })
</script>
<!--End of pre loader script-->

</html>
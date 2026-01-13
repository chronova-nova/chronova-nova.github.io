// contact.js
(function(){
  function ready(fn){ if(document.readyState!=='loading'){fn();} else {document.addEventListener('DOMContentLoaded', fn);} }
  ready(function(){
    var user = (window.CONTACT_USER||"").trim();
    var domain = (window.CONTACT_DOMAIN||"").trim();
    var tld = (window.CONTACT_TLD||"").trim();

    var pending = document.getElementById('contactPending');
    var btn = document.getElementById('contactMailBtn');

    if(!pending || !btn) return;

    if(user && domain && tld){
      var addr = user + "@" + domain + "." + tld;
      btn.href = "mailto:" + addr;
      btn.style.display = "inline-block";
      pending.style.display = "none";
    }else{
      btn.style.display = "none";
      pending.style.display = "block";
    }
  });
})();

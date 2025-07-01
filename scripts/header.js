function displayLoginPopUp(){
   const lockcontainer = document.getElementById("login-pop-up");

   const computedStyle = window.getComputedStyle(lockcontainer);

   if(computedStyle['display'] === 'none'){
    lockcontainer.style.display = 'flex';
   }
   else{
    lockcontainer.style.display = 'none';
   }
   
}
function displayOrHideLangPopUP(){
   const langcontainer = document.getElementById("choose-lang-container");
   const computedStyle = window.getComputedStyle(langcontainer);
   if(computedStyle['display'] == 'none'){
      langcontainer.style.display = 'flex';
   }
   else{
      langcontainer.style.display = 'none';
   }
}

   

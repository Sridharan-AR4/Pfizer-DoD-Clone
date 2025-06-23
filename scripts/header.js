function displayLoginPopUp(){
   const lockcontainer = document.getElementById("login-pop-up")

   const computedStyle = window.getComputedStyle(lockcontainer);

   if(computedStyle['display'] === 'none'){
    lockcontainer.style.display = 'flex';
   }
   else{
    lockcontainer.style.display = 'none';
   }
   
}
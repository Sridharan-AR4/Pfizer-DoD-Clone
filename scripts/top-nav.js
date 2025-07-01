

// console.log(menu[1].menuItems[0]);
const menu = [
{name : "Top Support", heading : "Trending Topics", menuItems : ["PingID: Manage Mobile Devices", "PingID: Configure Mobile App Prereqs", "PingID: Register Mobile Phone First Time", "PingID: Transfer App to New Mobile Phone", "NewLaptop4U Setup Instructions"], open : false},
{name : "Resources", heading : "Contact Us", menuItems : ["Service Desk"], open : false},
{name : "Manage Access", heading : "Connectivity", menuItems : ["Password On Demand", "Connect On Demand"], open : false}
]

function displayOrHideMenu(index){
   const menudiv = document.getElementById('menu');
   menudiv.innerHTML = '';
   if(menu[index].open == true){
    menu[index].open = false;
   }
   else{
    document.getElementById("dod-nav-item-img-0").style.rotate = '0deg';
    document.getElementById("dod-nav-item-img-1").style.rotate = '0deg';
    document.getElementById("dod-nav-item-img-2").style.rotate = '0deg';
    for(let obj of menu){
        obj.open = false;
    }
    menu[index].open = true;
    const name = menu[index].name;
    const heading = menu[index].heading;
    const items = menu[index].menuItems;

    const h2 = document.createElement('h2');
    h2.innerHTML = name;

    const h4 = document.createElement('h4');
    h4.innerHTML = heading;
    menudiv.appendChild(h2);
    menudiv.appendChild(h4);
    
    const menuitems = document.createElement('div');
    menuitems.className = 'menu-items';
    for(let item of items){
        const link = document.createElement('a');
        link.innerHTML = item;
        menuitems.appendChild(link);
    }
    menudiv.appendChild(menuitems);
   }

   if(menu[index].open == true){
    menudiv.style.display = 'flex';
    document.getElementById("dod-nav-item-img-"+index).style.rotate = '180deg';
}
else{
    menudiv.style.display = 'none';
    document.getElementById("dod-nav-item-img-"+index).style.rotate = '0deg';
   }
}
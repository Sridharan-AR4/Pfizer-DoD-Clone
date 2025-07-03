

// console.log(menu[1].menuItems[0]);
const menu = [
{name : "Top Support", heading : "Trending Topics", menuItems : ["PingID: Manage Mobile Devices", "PingID: Configure Mobile App Prereqs", "PingID: Register Mobile Phone First Time", "PingID: Transfer App to New Mobile Phone", "NewLaptop4U Setup Instructions"], links : ["https://pfeprod.service-now.com/digitalondemand?id=rightanswers_sp_solution&q=230119090108353", "https://pfeprod.service-now.com/digitalondemand?id=rightanswers_sp_solution&q=230628111911313", "https://pfeprod.service-now.com/digitalondemand?id=rightanswers_sp_solution&q=230119141925107", "https://pfeprod.service-now.com/digitalondemand?id=rightanswers_sp_solution&q=230531124735040", "https://pfeprod.service-now.com/digitalondemand?id=rightanswers_sp_solution&q=210330162530707"], open : false},
{name : "Resources", heading : "Contact Us", menuItems : ["Service Desk"], links : ["https://pfeprod.service-now.com/digitalondemand?id=pfe_digitalondemand_contact_service_desk"], open : false},
{name : "Manage Access", heading : "Connectivity", menuItems : ["Password On Demand", "Connect On Demand"], links : ["https://password.pfizer.com/", "https://pfeprod.service-now.com/digitalondemand?id=rightanswers_sp_solution&q=180327154249953"], open : false}
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
    const links = menu[index].links;

    const h2 = document.createElement('h2');
    h2.innerHTML = name;

    const h4 = document.createElement('h4');
    h4.innerHTML = heading;
    menudiv.appendChild(h2);
    menudiv.appendChild(h4);
    
    const menuitems = document.createElement('div');
    menuitems.className = 'menu-items';
    for(let i = 0; i < items.length; i++){
        const link = document.createElement('a');
        link.innerHTML = items[i];
        link.href = links[i];
        link.target = "_blank" ;
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
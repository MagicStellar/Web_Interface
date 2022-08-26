let tbody = document.getElementById("card")

//fetch function
setInterval( () => {
  fetch("http://3.6.80.109/dreamversebackend/api/listserver.php")
    .then(res=>res.json())
    .then(json=>{
	  tbody.innerHTML = ``;
      json.data.map(data => {
        console.log(data)
        tbody.append(td_fun(data.id, data.name, data.map, data.playerCount, data.address,data.region,data.password, data.maxPlayerCount));
        setTimeout(5000);
      })
    })
  }, 2000)
    

//creating Cards
function td_fun(id, name, map, playerCount, address, region, maxPlayerCount, password){
  let td = document.createElement('div');
  td.innerHTML = ` 
  <div class="container" id="cont">
  <div class="header">
    <h2>Server 0${id}</h2>
    <label class="switch1">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>       
    <div class="info">
      <table class="user-info">
          <tbody id="tbody">
            <tr>
              <td id = "1">Server ID</td>
              <td>${id}</td>
            </tr>
            <tr>
              <td>Server IP</td>
              <td id = "ip">${address}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td>${region}</td>
            </tr>
            <tr>
              <td>Max Player Count</td>
              <td>${password}</td>
            </tr>
            <tr>
              <td>Player Count</td>
              <td>${playerCount}</td>
            </tr>
            <tr>
              <td>Server Map</td>
              <td>${map}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>${maxPlayerCount}</td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>`
  return td
}

//Menu Navigation
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
    
    closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
    });
    
      searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
        sidebar.classList.toggle("open");
        menuBtnChange(); //calling the function(optional)
      });
    
      // following are the code to change sidebar button(optional)
      function menuBtnChange() {
       if(sidebar.classList.contains("open")){
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
       }else {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
       }
      }

// TABS LAYOUT JAVASCRIPT

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

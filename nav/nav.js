const sidenav = document.querySelector("#sidenav");
var insideNav = document.querySelectorAll("#sidenav > *");
const nav = document.querySelector("#navbar > .list-container");
const buttonCloseSideNavbar = document.getElementById("button-close");
const buttonOpenSideNavBar = document.getElementById("button-list");


function openSideNav() {
  //console.log(sidenav.clientWidth);
  if(sidenav.clientWidth == 0) {
    buttonCloseSideNavbar.style.display = "block";
    sidenav.style.width = `${window.innerWidth * 0.3}px`;
    for(var element of document.querySelectorAll("#sidenav > *")) {
      element.style.visibility = "visible";
    }
  }
}

function closeSideNav() {
  if(sidenav.clientWidth != 0) {
    buttonCloseSideNavbar.style.display = "none";
    sidenav.style.width = `0px`;
    for(var element of document.querySelectorAll("#sidenav > *")) {
      element.style.visibility = "hidden";
    }
  }
}

function main() {
  sidenav.innerHTML += nav.innerHTML + `<div></div>`;
}

main();
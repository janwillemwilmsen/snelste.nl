// var makeIframe = document.createElement("iframe");
// makeIframe.setAttribute("src", "http://aol.com");
// makeIframe.setAttribute("scrolling", "no");
// makeIframe.style.border = "none";
// makeIframe.style.left =  "-453px";
// makeIframe.style.top = "-70px";
// makeIframe.style.position = "absolute";
// makeIframe.style.width = "1440px";
// makeIframe.style.height = "775px";

// var makediv = document.createElement("div");
// makediv.style.height = "43px";
// makediv.style.width = "564px";
// makediv.style.position = "relative";
// makediv.style.overflow = "hidden";

let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';

// select the ul menu element
const menu = document.querySelector('#menu');
menu.appendChild(li);
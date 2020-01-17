let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog.jpg') {
      myImage.setAttribute('src', 'images/dog2.jpg');
    } else {
      myImage.setAttribute('src', 'images/dog.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入狗的名字。');
  if(!myName || myName === null) {
    setUserName();
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'MY DOG 酷毙了，' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'MY DOG 酷毙了，' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
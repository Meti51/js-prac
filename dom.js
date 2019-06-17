// // Single element selectors
//
// const x = document.querySelectorAll('.item');
//
// console.log(x[1].innerHTML)
// //
// // document.getElementByClassName('item')
// // document.getElementByTagName('item')
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'hello';
//
// //events
//
// btn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark')
// })

const btn = document.querySelectorAll('.btn');
console.log(btn)

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();

  if(nameInput.value == '' ||
    emailInput.value == ''){
      msg.innerHTML = 'PLease enter all fields'
      setTimeout(() => msg.remove(), 3000)
    } else {
      const li = document.createElement('li')
      li.innerHTML = nameInput.value + emailInput.value
      userList.appendChild(li)
      // 
      // nameInput.value = ''
      // emailInput.value = ''
    }
}

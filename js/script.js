 //const helloArr=document.getElementsByTagName('h1')[1];
// console.log(helloArr)

// const helloArr=document.querySelector('#queryselct').innerHTML
// console.log(helloArr)
// console.log(document.querySelectorAll('ul li'))
// const helloArr=document.querySelectorAll('ul > li')
// // console.log(helloArr)
// // console.log(document.querySelectorAll('ul li'))

// for (let i=0;i < helloArr.length; i++)
// {
//     helloArr[i].innerText = 'changetext';
//     helloArr[i].addEventListener('click', ()=> {
//        console.log("We clicked on this!",i)
//     } );
// }
// const toggle=document.querySelector('#toggle')
// toggle.addEventListener('click', () => {
//     document.querySelector('#box').classList.toggle('yellow')
//   })

const container = document.querySelector('#container')
const paintit = document.querySelector('#tool')

for(let i = 0; i < 8000; i++) {
  
  // creating an element
  const newDiv = document.createElement('div')
  newDiv.classList.add('box')

  // add event listener
  newDiv.addEventListener('mouseover', () => {
    newDiv.style.backgroundColor = "black"
  })

  tool.addEventListener('mouseover', () => {
    newDiv.style.backgroundColor = ""
  })
  // adding children to our container
  container.appendChild(newDiv)

}

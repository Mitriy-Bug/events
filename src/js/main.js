export default function main() {
  //document.addEventListener('DOMContentLoaded', () =>{
    const container = document.querySelector('.container');
    if (container) {
      for(let i = 0; i < 16; i++) {
        const newDiv = document.createElement('div')
        if (i === 0) {
          newDiv.classList.add('active', 'item')
        } else {
          newDiv.classList.add('item')
        }
        container.insertBefore(newDiv, container.firstChild)
      }
    }
    function getRandomNumber(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min) + min)
    }
    function activeItem() {
      const items = document.querySelectorAll('.item:not(.active)')
      if (items.length > 0) {
        const randomNumber = getRandomNumber(0, items.length)
        const active = document.querySelector('.active').classList.remove('active')
        items[randomNumber].classList.add('active')
      }
    }
    setInterval(activeItem, 2000)
  //})
}

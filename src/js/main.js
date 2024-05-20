export default class Game {
  constructor() {
    this.score = 0; // Счёт игрока
    this.goblinsMissed = 0; // Количество пропущенных гоблинов
    this.pointsToLose = 5; // Количество пропусков до проигрыша
    this.gameOver = false; // Флаг окончания игры
    this.setupGoblins();
    this.UserClick();
  }
  removeGoblins(){
    document.querySelector('.active').classList.remove('active')
  }
  RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  activeItem() {
    this.items = document.querySelectorAll('.item:not(.active)')
    this.removeGoblins(); // Удаление гоблинов
    if (this.items.length > 0) {
      this.items[this.RandomNumber(0, this.items.length)].classList.add('active')
    }
  }
  setupGoblins() {
      const container = document.querySelector('.container');
      if (container) {
        for (let i = 0; i < 16; i++) {
          const newDiv = document.createElement('div')
          if (i === 0) {
            newDiv.classList.add('active', 'item')
          } else {
            newDiv.classList.add('item')
          }
          container.insertBefore(newDiv, container.firstChild)
        }
      }
      setInterval(this.activeItem, 2000)
  }

  UserClick() {
    // Логика для обработки ввода пользователя
    document.addEventListener('click', (e) => {
      console.log(e.target.classList.contains('active'))
    });
  }
}

let randomNumber = Math.floor(Math.random() * 100) + 1
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')

btn.addEventListener('click', () => {
   const userGuess = Number(input.value)

   if(!userGuess || userGuess < 1 || userGuess > 100) {
      result.innerText = 'Ввведите число от 1 до 100! '
      input.value = ''

   } else if(userGuess == randomNumber) {
      result.innerText = 'Поздравляем! вы угадали!'
      setTimeout(() => {
         randomNumber = Math.floor(Math.random() * 100) + 1
         result.innerText = 'Загадайте снова'
      }, 3000);
      input.value = ''
   } else if (userGuess < randomNumber) {
      result.innerText = `Число ${userGuess} больше 🔝`
      input.value = ''
   } else {
      result.innerText = `Число ${userGuess} меньше ⬇️`
      input.value = ''
   }
})
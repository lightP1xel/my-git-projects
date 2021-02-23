const randomQuote = document.querySelector('.randomQuoteContainer')
const authorQuote = document.querySelector('.authorContainer')
const generateBtn = document.querySelector('.createQuote')

async function getRandomQuote() {
  let response = await fetch('http://quotable.io/random')
  let result = await response.json()
  randomQuote.innerHTML = result.content
  authorQuote.innerHTML = `Автор цитаты: ${result.author}`
}

generateBtn.addEventListener('click', getRandomQuote)

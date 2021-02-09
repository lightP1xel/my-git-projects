const mainBlock = document.createElement('div')
const mainBlockText = document.createElement('p')
const mainBlockAddTaskDiv = document.createElement('div')
const mainBlockInput = document.createElement('input')
const mainBlockButton = document.createElement('button')
const mainBlockTaskContainer = document.createElement('div')

mainBlock.classList.add('mainContentDiv')
mainBlockText.classList.add('mainBlockText')
mainBlockAddTaskDiv.classList.add('mainBlockAddTaskDiv')
mainBlockButton.classList.add('mainBlockButton')
mainBlockTaskContainer.classList.add('mainBlockTaskContainer')

mainBlockText.innerHTML = 'todo list'
mainBlockButton.innerHTML = 'Добавить задачу'

mainBlock.append(mainBlockText)
document.body.append(mainBlock)
mainBlock.append(mainBlockAddTaskDiv)
mainBlockAddTaskDiv.append(mainBlockInput)
mainBlockAddTaskDiv.append(mainBlockButton)
mainBlock.appendChild(mainBlockTaskContainer)

mainBlockButton.addEventListener('click', (event) => {
  const li = document.createElement('li')
  const ol = document.createElement('ol')

  mainBlockTaskContainer.appendChild(li)
  li.appendChild(ol)

  let temp = mainBlockInput.value
  li.innerHTML = temp
  mainBlockInput.value = ''
})

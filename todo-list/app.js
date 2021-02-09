const mainBlock = document.createElement('div')
const mainBlockText = document.createElement('p')
const mainBlockAddTaskDiv = document.createElement('div')
const mainBlockInput = document.createElement('input')
const mainBlockButton = document.createElement('button')
const mainBlockTaskContainer = document.createElement('div')
const mainBlockRemoveButton = document.createElement('button')

mainBlock.classList.add('mainContentDiv')
mainBlockText.classList.add('mainBlockText')
mainBlockAddTaskDiv.classList.add('mainBlockAddTaskDiv')
mainBlockButton.classList.add('mainBlockButton')
mainBlockTaskContainer.classList.add('mainBlockTaskContainer')
mainBlockRemoveButton.classList.add('mainBlockButton')

mainBlockText.innerHTML = 'todo list'
mainBlockButton.innerHTML = 'Добавить задачу'
mainBlockRemoveButton.innerHTML = 'Удалить задачу'

mainBlock.append(mainBlockText)
document.body.append(mainBlock)
mainBlock.append(mainBlockAddTaskDiv)
mainBlockAddTaskDiv.append(mainBlockInput)
mainBlockAddTaskDiv.append(mainBlockButton)
mainBlock.append(mainBlockRemoveButton)
mainBlock.appendChild(mainBlockTaskContainer)

mainBlockButton.addEventListener('click', (event) => {
  const li = document.createElement('li')
  const ol = document.createElement('ol')
  li.classList.add('test')

  mainBlockTaskContainer.appendChild(li)
  li.appendChild(ol)

  let temp = mainBlockInput.value
  li.innerHTML = temp
  mainBlockInput.value = ''

  li.addEventListener('click', (event) => {
    if (event.target.classList.contains('test')) {
      event.target.classList.toggle('active')
    }
  })
})

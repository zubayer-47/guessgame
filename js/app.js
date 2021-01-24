const msg = document.querySelector('.msg')
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')


let newWords = ''
let randWords = ''

let play = false
let sWords = ['Education', 'Python', 'Angry', 'crying', 'Able', 'ability', 'above', 'Abuse', 'accompany', 'Accept', 'Except', 'Acknowledge', 'action', 'basic', 'basis', 'beauty', 'Beautiful', 'branch', 'see', 'saw', 'seen', 'Student', 'Students', 'because', 'become', 'before', 'begin', 'below', 'believe', 'Bell', 'Certain', 'chain', 'chair', 'give', 'Do', 'Odd', 'even', 'Sorry', 'pall', 'friends', 'Friend', 'Wrong', 'Answer', 'Question', 'Logical', 'Logically', 'Boss', 'Zubayer', 'ABM', 'English', 'Code', 'programming', 'Language', 'case', 'sensitive', 'Dinner']

const createNewWords = () => {
      let ranNum = Math.floor(Math.random() * sWords.length)
      let newTemp = sWords[ranNum]
      // console.log(newTemp.split(''))
      return newTemp
}

const scrambleWords = (arr) => {
      for (let i = arr.length - 1; i >0; i--) {
            let temp =  arr[i]
            // console.log(temp)
            let j = Math.floor(Math.random() * (i + 1))
            // console.log(i)
            // console.log(j)

            arr[i] = arr[j]
            arr[j] = temp
      }
      return arr
}


btn.addEventListener('click', function() {
      if (!play) {
            play = true
            msg.style.color = '#ffffff'

            btn.innerHTML = 'Guess'
            guess.classList.toggle('hidden')

            newWords = createNewWords()

            randWords = scrambleWords(newWords.split('')).join(' ')
            // console.log(randWords.join(' '))

            msg.innerHTML = `Guess The Word: 
             ${randWords}`
      } else {
            let tempWord = guess.value
            
            if (tempWord === newWords) {
                  play = false
                  msg.style.color = 'rgb(3, 187, 3)'
                  msg.innerHTML = `Awesome It's Correct. The word was "${newWords}"`
                  btn.innerHTML = `Start Again`
                  guess.classList.toggle('hidden')

                  
                  guess.value = ''
            } else {
                  msg.style.color = 'rgb(228, 9, 9)'
                  msg.innerHTML = `Sorry pall! You're incorrect. Please try again. The word was "${randWords}"`
            }
      }
})
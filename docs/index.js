const ball = document.querySelector('.ball');
const aperture = document.querySelector('.aperture');
const triangle = document.querySelector('.triangle');
const text = document.querySelector('.text');
const phrases = [
      {
        "id": 0,
        "phrase": "Hi",
        "direction": false,
        "text": false
    },
    {
        "id": 1,
        "phrase": "It is certain",
        "direction": false,
        "text": false
    },
    {
        "id": 2,
        "phrase": "It is decidedly so",
        "direction": "down",
        "text": "txtDown"
    },
    {
        "id": 3,
        "phrase": "Without a doubt",
        "direction": "left",
        "text": "txtLeft"
    },
    {
        "id": 4,
        "phrase": "Yes-definitely",
        "direction": "right",
        "text": "txtRight"
    },
    {
        "id": 5,
        "phrase": "You may rely on it",
        "direction": false,
        "text": false
    },
    {
        "id": 6,
        "phrase": "As I see it, yes",
        "direction": "down",
        "text": "txtDown"
    },
    {
        "id": 7,
        "phrase": "Most likely",
        "direction": "left",
        "text": "txtLeft"
    },
    {
        "id": 8,
        "phrase": "Outlook good",
        "direction": "right",
        "text": "txtRight"
    },
    {
        "id": 9,
        "phrase": "Yes!!",
        "direction": false,
        "text": false
    },
    {
        "id": 10,
        "phrase": "Signs point to yes",
        "direction": "down",
        "text": "txtDown"
    },
    {
        "id": 11,
        "phrase": "Reply hazy, try again",
        "direction": "left",
        "text": "txtLeft"
    },
    {
        "id": 12,
        "phrase": "Ask again later",
        "direction": "right",
        "text": "txtRight"
    },
    {
        "id": 13,
        "phrase": "Better not tell you now",
        "direction": false,
        "text": false
    },
    {
        "id": 14,
        "phrase": "Cannot predict now",
        "direction": "down",
        "text": "txtDown"
    },
    {
        "id": 15,
        "phrase": "Concentrate and ask again",
        "direction": "left",
        "text": "txtLeft"
    },
    {
        "id": 16,
        "phrase": "Don't count on it",
        "direction": "right",
        "text": "txtRight"
    },
    {
        "id": 17,
        "phrase": "My reply is no",
        "direction": false,
        "text": false
    },
    {
        "id": 18,
        "phrase": "My sources say no",
        "direction": "down",
        "text": "txtDown"
    },
    {
        "id": 19,
        "phrase": "Outlook not so good",
        "direction": "left",
        "text": "txtLeft"
    },
    {
        "id": 20,
        "phrase": "Very doubtful",
        "direction": "right",
        "text": "txtRight"
    }

];
let randomNumber = 0

//set randomNumber
const handleRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 20) + 1
    console.log(randomNumber)
}

// hide triangle on mouseover
ball.addEventListener('mouseover', () => {
    triangle.style.visibility = 'hidden'
    text.classList.remove(phrases[randomNumber].text)
    triangle.classList.remove(phrases[randomNumber].direction)
    handleRandomNumber()
})

//show triangle on mouseout
ball.addEventListener('mouseout', () => {
    text.innerText = phrases[randomNumber].phrase
    text.classList.add(phrases[randomNumber].text)
    triangle.classList.add(phrases[randomNumber].direction)
    triangle.style.visibility = ''

})

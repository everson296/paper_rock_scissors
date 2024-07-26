const gameContainer = document.querySelector('.container'),
userResult = document.querySelector('.user_result img'),
cpuResult = document.querySelector('.cpu_result img'),
result = document.querySelector('.result'),
optionImages = document.querySelectorAll('.option_image');

optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active')

        userResult.src = cpuResult.src = 'img/rock.png';
        result.textContent = 'espere...'

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active');
        })

        gameContainer.classList.add('start')

        let time = setTimeout(() => {
            gameContainer.classList.remove('start')

            let imageSrc = e.target.querySelector('img').src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3)
            let cpuImages = ['img/rock.png', 'img/paper.png', 'img/scissors.png'];
            cpuResult.src = cpuImages[randomNumber]

            let cpuValue = ['R', 'P', 'S'][randomNumber]
            let userValue = ['R', 'P', 'S'][index]

            let outcomes = {
                RR: 'Empate',
                RP: 'Cpu',
                RS: 'Você',
                PP: 'Empate',
                PR: 'Você',
                PS: 'Cpu',
                SS: 'Empate',
                SR: 'Cpu',
                SP: 'Você',
            };

            let outcomeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? 'empate' : `${outcomeValue} venceu!!`;
        }, 1000)
    })
})


document.getElementById('runFizzBuzzButton').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement('li');
        if (i % 3 === 0 && i % 5 === 0) {
            listItem.textContent = "FizzBuzz";
        } else if (i % 3 === 0) {
            listItem.textContent = "Fizz";
        } else if (i % 5 === 0) {
            listItem.textContent = "Buzz";
        } else {
            listItem.textContent = i;
        }
        resultElement.appendChild(listItem);
    }
});

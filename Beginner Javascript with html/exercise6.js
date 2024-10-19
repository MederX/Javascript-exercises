document.getElementById('checkPalindromeButton').addEventListener('click', function(){
    const input = document.getElementById('inputPalindrome').value;
    const reversed = input.split('').reverse().join('');
    if(input === reversed){
        document.getElementById('result').textContent = "It is a palindrome!";
    }
    else{
        document.getElementById('result').textContent = "Not a palindrome.";
    }
})

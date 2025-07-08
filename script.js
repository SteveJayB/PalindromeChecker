const extendBox = () => {
  const box = document.getElementById('box'); //function to increase box size to create room for result text
  const result = document.getElementById('result');
  box.style.height = '150px';
  result.style.marginTop = '20px';
}

const checkPalindrome = () => {
  const result = document.getElementById('result'); //declare result
  const text = document.getElementById('text-input'); //declare text input

  let noSpaces = text.value.trim(); //remove whitespaces
  const input = text.value; //declare input as the text value
  const validInput = input.replace(/[^a-zA-Z0-9]/g, ''); //declaration to remove non-alphanumeric
  const lowerCase = validInput.toLowerCase(); //declaration to convert all text to lovercase
  const reversed = lowerCase.split('').reverse().join(''); //declaration to reverse validInput

  if (noSpaces === "") {
    alert("Please input a value"); //alert that text field is empty
  }
  else {
    if (lowerCase === reversed) {
      extendBox(); //make box bigger for room for result message
      result.innerHTML = `${input} is a palindrome!`; //message that text is a palindrome displays
    }
    else {
      extendBox(); //make box bigger for room for result message
      result.innerHTML = `${input} is not a palindrome!`; //message that text is not a palindrome displays
    }
  }
}

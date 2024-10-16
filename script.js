document.getElementById("drawButton").addEventListener("click", generateLottoNumbers);

function generateLottoNumbers() {
  const lottoNumbers = [];
  
  // 1부터 45까지의 랜덤한 숫자 6개 생성
  while (lottoNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
    }
  }

  // 오름차순 정렬
  lottoNumbers.sort((a, b) => a - b);

  displayNumbers(lottoNumbers);
}

function displayNumbers(numbers) {
  const lottoNumbersDiv = document.getElementById("lottoNumbers");
  lottoNumbersDiv.innerHTML = "";

  numbers.forEach((number) => {
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("number");
    numberDiv.textContent = number;
    lottoNumbersDiv.appendChild(numberDiv);
  });
}

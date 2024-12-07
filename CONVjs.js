const numberInput = document.getElementById("numberInput");
    const decimalResult = document.getElementById("decimalResult");
    const octalResult = document.getElementById("octalResult");
    const hexadecimalResult = document.getElementById("hexadecimalResult");
    const binaryResult = document.getElementById("binaryResult");

    numberInput.addEventListener("input", () => {
        const inputValue = numberInput.value.trim();

        if (inputValue === "" || isNaN(inputValue)) {
            decimalResult.value = "";
            octalResult.value = "";
            hexadecimalResult.value = "";
            binaryResult.value = "";
            return;
        }

        const number = parseInt(inputValue, 10);
        decimalResult.value = number.toString(10);
        octalResult.value = number.toString(8);
        hexadecimalResult.value = number.toString(16).toUpperCase();
        binaryResult.value = number.toString(2);
    });
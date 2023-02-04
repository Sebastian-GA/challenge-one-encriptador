const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#text-output");

const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

function encrypt(text) {
    text = text.toLowerCase();
    keys.forEach((element) => {
        const [vowel, value] = element;
        text = text.replaceAll(vowel, value);
    });
    return text;
}

function decrypt(text) {
    text = text.toLowerCase();
    keys.forEach((element) => {
        const [vowel, value] = element;
        text = text.replaceAll(value, vowel);
    });
    return text;
}

function btnEncrypt() {
    if (textInput.value != "") {
        textInput.value = removeAccents(textInput.value);
        const encrypted_text = encrypt(textInput.value);
        textOutput.value = encrypted_text;

        textOutput.style.backgroundImage = "none";
        textInput.value = "";
    }
}

function btnDecrypt() {
    if (textInput.value != "") {
        textInput.value = removeAccents(textInput.value);
        const decrypted_text = decrypt(textInput.value);
        textOutput.value = decrypted_text;

        textOutput.style.backgroundImage = "none";
        textInput.value = "";
    }
}

function btnCopy() {
    if (textOutput.value != "") {
        navigator.clipboard.writeText(textOutput.value);
    }
}

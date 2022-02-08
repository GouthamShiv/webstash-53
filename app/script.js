const qrCode = document.querySelector('img');
const count = document.querySelector('small');
const qrText = document.querySelector('input');
const qrBtn = document.querySelector('button');

const maxLength = 30;
const baseURL = 'https://api.qrserver.com/v1/create-qr-code/';

qrText.addEventListener(
    'input',
    () => (count.innerText = `${qrText.value.length} / ${maxLength}`)
);

qrBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
    const size = '1000x1000';
    const data = qrText.value;
    const url = `${baseURL}?data=${data}&size=${size}`;
    qrCode.src = url;
    qrText.value = '';
}

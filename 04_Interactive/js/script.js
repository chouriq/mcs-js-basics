function onSubmit(event) {
    let v = parseFloat($input.value);
    if (!isNaN(v)) {
        if (v<0) v = -v;
        $result.innerHTML = v;
    }
    else $result.innerHTML = "Не удалось прочитать число.";
}

const $form = document.getElementById('form1');
const $input = document.getElementById('input1');
const $result = document.getElementById('result');

$form.addEventListener('submit', onSubmit, false);
function checkForm(el) {
    let name = el.name.value.trim();
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = document.querySelector('input[name="state"]:checked')?.value;
    let error = "";

    if (!name || !pass || !repass || !state) {
        error = "Заполните все поля";
    } else if (name.length <= 1 || name.length > 50) {
        error = "Имя должно быть от 2 до 50 символов";
    } else if (/[<>"'&$%]/.test(name)) {
        error = "Имя содержит недопустимые символы";
    } else if (pass !== repass) {
        error = "Пароли должны совпадать";
    } else if (pass.length < 8) {
        error = "Пароль должен быть не менее 8 символов";
    } else if (!/[A-Z]/.test(pass)) {
        error = "Пароль должен содержать заглавную букву";
    } else if (!/[a-z]/.test(pass)) {
        error = "Пароль должен содержать строчную букву";
    } else if (!/[0-9]/.test(pass)) {
        error = "Пароль должен содержать цифру";
    } else if (/\s/.test(pass)) {
        error = "Пароль не должен содержать пробелов";
    }

    if (error) {
        document.getElementById('error').textContent = error;
        return false;
    } else {
        alert("Форма успешно отправлена!");
        return true;
    }

}
// Глаза
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = 'password';
            this.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});
const formLogin = document.querySelector('#login');
const formData = new FormData(formLogin);

formLogin.addEventListener('submit', event => {
    event.preventDefault();
    fetch('api/signin', {
        method: 'POST',
        body: formData
    })
        .then(res => json())
        .then(data => console.log())
});
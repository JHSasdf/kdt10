
const loginBtnElement = document.querySelector('#login');
const resultBoxElement = document.querySelector('.result');
const form = document.forms['form'];
console.log(form);

async function checkLogin() {
    const res = await axios({
        url: '/login',
        method: 'post',
        data: {
            userid: form.userid.value,
            pw: form.pw.value
        }
    })
    
    if (res.data.name) {
        location.href = '/profile';
        return resultBoxElement.innerHTML =`<p>${res.data.name}님 환영합니다!</p> <p>hash된 패스워드는 ${res.data.pw}입니다.</p>`;
    }
    resultBoxElement.innerHTML =`<p>${res.data}`;
}

loginBtnElement.addEventListener('click', checkLogin);
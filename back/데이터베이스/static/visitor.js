const tbody = document.querySelector('tbody');

// 폼의 등록 버튼 클릭시
// 테이블에 데이터 추가
function createVisitor() {
    const form = document.forms['visitor-form'];

    if(form.name.value.length === 0 || form.comment.value.length === 0) {
        alert('이름 또는 방명록을 기입해주세요!');
        return;
    }

    // name 10글자 유효성 검사
    if(form.name.value.length > 10) {
        alert('이름을 10글자 미만으로 설정해주세요.');
        return;
    }

    axios({
        method: 'post',
        url: '/visitor',
        data: {
            name: form.name.value,
            comment: form.comment.value
        }
    }).then(function (res) {
        console.log(res.data);
        const data = res.data;
        console.log(data);
        const html = `
        <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button">수정</button></td>
                <td><button type="button">삭제</button></td>
                </tr>`

                tbody.insertAdjacentHTML('beforeend',html);

    })
}
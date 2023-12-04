const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#button-group')
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
                <td><button type="button" onclick="editVisitor(${data.id})">수정</button></td>
                <td><button type="button" onclick="deleteVisitor(this, ${data.id})">삭제</button></td>
                </tr>`

                tbody.insertAdjacentHTML('beforeend',html);
                form.reset();

    })
}

// 홈의 수정 버튼 클릭시 동작
// - form input에 값 넣기
// - 변경, 취소 버튼 보이기
function editVisitor(id) {
    // form input값 넣기 (DB에서 값 받아서)
    axios({
        method: 'get',
        // 1) req.query -> url에다가 직접 넣기
        // 2) query에 넣기
        url: `/visitor?id=${id}`
    }).then( function(res) {
        console.log('editVisitor get data>', res.data);
        const {name, comment} = res.data;
        const form = document.forms['visitor-form'];

        form.name.value = name;
        form.comment.value = comment;
    })

    // (2). 변경, 취소 버튼 보이기 
    const html = `
    <button type="button" onclick='editDo(${id})'>변경</button>
    <button type="button" onclick='editCancel(${id})'>취소</button>
    `
    btnGroup.innerHTML = html;
}

// 변경버튼 클릭시
function editDo(id) {
    const form = document.forms['visitor-form'];
    axios({
        method: 'PATCH',
        url: '/visitor',
        data: {
            id: id,
            name: form.name.value,
            comment: form.comment.value
        }
    }).then(function(res) {
        console.log(res.data);
        const children = document.querySelector(`#tr_${id}`).children;
        children[1].textContent = form.name.value;
        children[2].textContent = form.comment.value;

        // 입력창 초기화
        editCancel();
    })
}

function editCancel() {
    const form = document.forms['visitor-form'];
    form.reset();
    btnGroup.innerHTML = '<button type="button" onclick="createVisitor()">등록</button>';
}


function deleteVisitor(obj, id) {
    console.log('obj >', obj); // btn 태그
    console.log('id >', id); // index

    if (!confirm('정말 삭제하시겠습니까.')) {
        return
    }

    axios({
        method: 'DELETE',
        url: '/visitor',
        data: {
            id: id
        }
    }).then(function(res) {
        console.log(res.data);
        // 부모 접근 1
        obj.parentElement.parentElement.remove();

        // 부모 접근 2
        // obj.closest(`#tr${id}`).remove();
    })

    
}
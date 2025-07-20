// Enterキーで追加できるようにする（※これは最初に一度だけ登録）
document.getElementById('add-area').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('.add-btn').click();
    }
});

document.querySelector('.add-btn').addEventListener('click', () => {
    const listText = document.getElementById('add-area');
    const textValue = listText.value;

    if (textValue.trim() === '') return;

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(textValue));

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '完了';
    doneBtn.classList.add('done-btn');
    doneBtn.addEventListener('click', () => {
        document.getElementById('done').appendChild(li);
        doneBtn.remove();
    });
    li.appendChild(doneBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteBtn);

    const now = new Date();
    const time = document.createElement('span');
    time.textContent = `（${now.toLocaleTimeString()}）`;
    time.style.marginLeft = '10px';
    li.appendChild(time);

    document.getElementById('todo').appendChild(li);
    listText.value = '';
});

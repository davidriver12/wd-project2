const newPostBtn = document.querySelector('.newPostBtn');
const newPostForm = document.querySelector('.newPostForm');
const blackDiv = document.querySelector('.blackDiv');
newPostBtn.onclick = function(){
    blackDiv.classList.toggle('hidden');
    newPostForm.classList.toggle('hidden');
}

const cancelBtn = document.querySelector('.cancelBtn');
cancelBtn.onclick = function(){
    blackDiv.classList.toggle('hidden');
    newPostForm.classList.toggle('hidden');
}

var continueBtns = document.querySelectorAll('.continueBtn');
continueBtns.forEach(btn => {
    btn.onclick = function(){
        var url = 'http://localhost:3000/post/' + btn.id;
        location.assign(url);
    }
})

var deleteBtns = document.querySelectorAll('.deleteBtn');
deleteBtns.forEach(btn => {
    btn.onclick = function(){
        var url = 'http://localhost:3000/delete/' + btn.id;
        location.assign(url);
    }
})
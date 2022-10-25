const editPostBtn = document.querySelector('.editPostBtn');
const editPostForm = document.querySelector('.editPostForm');
const blackDiv = document.querySelector('.blackDiv');
editPostBtn.onclick = function(){
    blackDiv.classList.toggle('hidden');
    editPostForm.classList.toggle('hidden');
}

const cancelBtn = document.querySelector('.cancelBtn');
cancelBtn.onclick = function(){
    blackDiv.classList.toggle('hidden');
    editPostForm.classList.toggle('hidden');
}

const homeBtn = document.querySelector('.homeBtn');
homeBtn.onclick = function(){
    location.assign('http://localhost:3000/');
}
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

//ANIMACION

const handleOnMouseMove = e =>{
    const {currentTarget: target} = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x",`${x}px`)
    target.style.setProperty("--mouse-y",`${y}px`)

}

for(const postCard of document.querySelectorAll(".editPostForm")){
    postCard.onmousemove = e => handleOnMouseMove(e);
}
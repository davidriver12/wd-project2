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

const aboutBtn = document.querySelector('.aboutBtn');
aboutBtn.onclick = function(){
    location.assign('http://localhost:3000/about_us');
}

///ANIMACION

const handleOnMouseMove = e =>{
    const {currentTarget: target} = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x",`${x}px`)
    target.style.setProperty("--mouse-y",`${y}px`)

}

for(const postCard of document.querySelectorAll(".postCard")){
    postCard.onmousemove = e => handleOnMouseMove(e);
}
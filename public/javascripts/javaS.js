let flag = false;
const file_ = document.querySelector(".second");

const changeValue = () => {
    (flag === false) ? flag = true : flag = false;
    if (flag === false) {
        file_.classList.add('hidden');
    }
    else {
        file_.classList.remove('hidden');
    }
}

const btn = document.querySelector('.btn').addEventListener('click', ()=>{
    changeValue();
})

const counter = document.getElementById('counter');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(){
        id = this.id;
        let val = parseInt(counter.innerText);
        if(id == 'previous'){
            val -= 1;
        }
        else if(id == 'reset'){
            val = 0;
        }
        else{
            val += 1;
        }
        if(val < 0){
            counter.style.color = 'red';
        }
        else{
            counter.style.color = 'black';
        }
        counter.innerText = val;
    });
});
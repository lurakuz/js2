let pass = prompt ('write password') ;
let answer = 'qwerty';
let count = 0;
    while (pass!='qwerty') {
        pass = prompt('У вас залишилося 4 спроби!');
        count++
        while(count>=4) {
            alert('Спробуйте пізніше');
        }
    }
    while(pass==='qwerty'){
        alert('Ви ввійшли')
    }


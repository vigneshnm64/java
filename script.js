

function totalmarks(marks){
    //var marks = 496;
    var percentage = (marks/500) * 100;
    console.log('my percentage', percentage);
}

totalmarks(496);

function oddOrEven(number) {
    if((number%2) == 0) {
        console.log('Number is even');
    } else {
        console.log('Number is odd');
    }
}

oddOrEven(100);

function reverseString(text) {
   
    console.log(text.split('').reverse().join(''));
}

reverseString('vignesh');

// split
//['a', 'p', 'p', 'l', 'e']

// reverse
//['e', 'l', 'p', 'p', 'a']

// join
//'elppa'



// using the switch with the export default

export function  addition(a, b ){
    return a + b;
}

export function subtraction(a, b){
    return a - b ;
}


export default function calculator(a, b, operator){

    switch(operator){

        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}
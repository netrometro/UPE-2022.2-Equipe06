class Validator{

    constructor() {
        this.validations= [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-only-letters',
            'data-equal',
            'data-password-validate',
        ]
    }
    // iniciar a validação dos campos apresentados
    validate(form){

        //registrar as validações
        let currentValidations = document.querySelector('form .erro-validation')
       
        if(currentValidations.length > 0){
            this.currentValidations(currentValidations)
        }

        let inputs = form.getElementById('input');

        let inputsArray = [...inputs]
    
    //loop nos inputs e validação realizada mediante ao que for preenchido
        inputsArray.forEach(function(input) {
        
    //loop de validações 
        for (let i = 0; this.validations.length > i; i++) {
            
            if(input.getAtribute(this.validations[i]) != null) {
            console.log('Validação Identificada')
        }
    }

        }, this);
    }

    // verificação de valor minmo para o input 
    minlength(input, minValue) {
        let inputLength = input.value.length;

        let errorMensage = 'Campo precisa ter pelo menos $(minValue) caracteres';

        if(inputLength < minValue) {
           this.printMensage(input, errorMensage);
        }
    }

//limite de caracteres
maxlength(input, maxValue){
    let inputLength = input.value.length;

    let errorMensage = 'Campo precisa ter pelo menos $(maxValue) caracteres';

    if(inputLength > maxValue){
        this.printMensage(input,errorMensage);
    }
}
//validação de emails
emailValidation(input){
    let re = /\S+@\S+\.S+/;
    let email = input.value;
    let errorMensage = 'Insira um email padrão seunome@email.com';
    if(!re.test(email)){
        this.printMensage(input,errorMensage);
    }
}

//validação de campo apenas com caracteres do tipo string
onlyletter(input){
    let re = /^[A-Za-z]+$/;
    let inputValue = input.value;
    let errorMensage = 'Esse campo não aceita numeros ou caracteres especiais';

    if(!re.test(inputValue)){
        this.printMensage(input, errorMensage);
    }

}
//verifica se os campos de senha são iguais 
equal(input, inputName){
    let inputToCompare = document.getElementByName(inputName)[0];
    let errorMensage = 'Este campo precisa estar igual ao $(inputName)';

    if(input.value !== inputToCompare.value){
        this.printMensage(input, errorMensage);
    }
}

// validação do campo de senha
passwordvalidade(input) {

    let charArr = input.value.split("");
    let uppercases =0;
    let numbers =0; 

    for(let i = 0; charArr.length > i; i++){
        if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))){
            uppercases++;

        }else if(isNaN(parseInt(charArr[i]))){
            numbers++;
        }
     }

if (uppercases === 0 || numbers === 0) {
     let errorMensage = 'A senha precisa ter um caractere maiúsculo e um número';

     this.printMensage(input,errorMensage);

    }
}
// metodo de apresentação de mensagem de erro pro usuario
printMensage(input, msg) {

    let errorQuanty = input.parentNode.querySelector('.error-validation')

    if(errorQuanty === null){
        let template = document.querySelector('.error-validator').cloneNode(true);

        template.textContent = msg;
    
        let inputParent = input.parenteNode;
    
        template.classList.remove('template');
    
        inputParent.appendChild(template);  
    }
}

//input requerido
required(input) {
    let inputValue = input.value;

    if(inputValue === ''){
        let errorMensage = 'Campo obrigatório!';

        this.printMensage(input, errorMensage);
    }
}

cleanValidation(validations) {
    
    validations.forEach(el => el.remove())
}

}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator()

// preenchimento que ativa as validações

submit.addEventListener('click', function(e){

    e.preventDefault();

    console.log('Funcionou');

    validator.validate(form);
});
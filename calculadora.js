function menu(){
    let choice;

    console.clear();
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir (Divide)");
    console.log("5 - Resto da divisao");
    console.log("6 - Potencia");
    console.log("0 - Sair");    

    choice = parseInt(prompt("A operacao que queres realizar: "));
    switch (choice) {
        case 1:
          somar();
          break;
        case 2:
          subtrair();
          break;
        case 3:
          multiplicar();
          break;
        case 4:
          dividir();
          break;
        case 5:
          restoDiv();
          break;
        case 6:
          potencia();
          break;
        case 0:
          console.log("Saindo...");
          break;
        default:
          menu();
      }
    }
    

    function somar() {
      let num1, num2;
    
      num1 = parseFloat(prompt("Digite o primeiro valor: "));
      num2 = parseFloat(prompt("Digite o segundo valor: "));
    
      console.log("A soma dos valores e: " + (num1 + num2));
    }
    
    
    function subtrair() {
      let num1, num2;
    
      num1 = parseFloat(prompt("Digite o primeiro valor: "));
      num2 = parseFloat(prompt("Digite o segundo valor: "));
    
      console.log("A subtracao resulta em: " + (num1 - num2));
    }
    
    
    function multiplicar() {
      let num1, num2;
    
      num1 = parseFloat(prompt("Digite o primeiro valor: "));
      num2 = parseFloat(prompt("Digite o segundo valor: "));
    
      console.log("O valor da multiplicacao sera: " + (num1 * num2));
    }
    
 
    function dividir() {
      let num1, num2;
    
      num1 = parseFloat(prompt("Digite o dividendo: "));
      num2 = parseFloat(prompt("Digite o divisor: "));
    
      while (num2 === 0) {
        num2 = parseFloat(prompt("Impossivel dividir por 0, digite outro valor: "));
      }
    
      console.log("O resultado sera: " + (num1 / num2));
    }
    
    
    function restoDiv() {
      let num1, num2;
    
      num1 = parseInt(prompt("Digite o dividendo: "));
      num2 = parseInt(prompt("Digite o divisor: "));
    
      while (num2 === 0) {
        num2 = parseInt(prompt("Impossivel dividir por 0, digite outro valor: "));
      }
    
      console.log("O resto da divisao sera: " + (num1 % num2));
    }
    
    
    function potencia() {
      let base, exponent;
    
      base = parseFloat(prompt("Digite a base: "));
      exponent = parseFloat(prompt("Digite o expoente: "));
    
      console.log("O resultado sera: " + Math.pow(base, exponent));
    }
    
    
    menu();
    
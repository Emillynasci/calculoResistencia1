
function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valueMulti = document.getElementById("multi").value;
    let valueToler = document.getElementById("toler").value;
    let operacao = (valueF01+valueF02)* valueMulti;
    let toler = (operacao-valueToler);
    let toler02 = (operacao+valueToler);
    document.getElementById("final").value = operacao;
    document.getElementById("tolera").value = toler;
    document.getElementById("toler2").value = toler02;
}

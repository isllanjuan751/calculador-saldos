const input_valores = document.getElementById("Valores");
const btn_adicionar = document.getElementById("Adicionar");
const btn_calcular = document.getElementById("Calcular");
const valor_Total_txt = document.getElementById("Valor_Somado");
const btn_limparTudo = document.getElementById("LimparTotal");
let somador = [];
let total = 0;

btn_adicionar.addEventListener("click", () => {
    const valor = Number(input_valores.value);
    somador.push(valor);
});

btn_calcular.addEventListener("click", () => {
    for (let valor_ of somador) {
        total+=valor_;
    }

    valor_Total_txt.textContent = "Valor Total: " +  total;
    somador = [];
});

btn_limparTudo.addEventListener("click", () => {
    input_valores.value = "";
    input_valores.placeholder = "Digite valore: ";
    somador = [];
    total = 0;
    Notification.requestPermission();
    new Notification("Limpador", {
        body: "Limpado com sucesso, clique em calcular para restaurar o valor total padrão: 0",
    });
});
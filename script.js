
const lanches = [
    "Empanada de frango", "Empanada de queijo", "Empanada de carne", 
    "Coxinha de frango", "Coxinha de camarão", "Coxinha de frango com requeijão", 
    "Risole de carne", "Empadão de frango", "Croissant", "Fatia de torta chocolate", 
    "Fatia de torta bem casado", "Fatia de torta redvelvet", "Fatia de torta ninho com Nutella",
    "Tortilete", "Base de brownie", "Brigadeiro branco", "Brigadeiro preto",
    "Massa de surpresa de uva", "Copo da felicidade ninho com Nutella", 
    "Copo da felicidade chocolate", "Copo da felicidade bem casado",
    "Bolo no pote napolitano", "Bolo no pote bem casado", "Bolo no pote chocolate",
    "Torta crocante", "Torta bem casado", "Torta chocolate", "Torta prestígio",
    "Cola coca 1 litro", "Coca cola zero lata", "Coca cola lata", "Coca de 500 ml",
    "Coca de 500 zero", "Guarana de 1 litro", "Guarana zero lata", "Guarana lata", 
    "Sprit", "Fanta lata", "H20 limonete", "H20", "Água mineral", "Água com gás", "ketchup", "Maioneze", "Mostarda", "Sal", "Açucar", "Leite", "Gelatines banana", "Amoras", "Cobrinhas cítricas", "Granulado chocolate", "Gotas de chocolate", "M&M", "Jazam coloreti", "Jujuba", "Nutella", "Farinha láctea", "Caldas", "Morango", "Chocolate", "Kiwi", "Amora", "Frutas vermelhas", "Leite condensado", "Mel de abelha", "Mel de engenho", "Café em grãos", "Achocolatado Alpino", "Nescau", "Capuccino", "Achocolatado dois frades"
    "Empada de charque", "Empada de Camarão", "Empada de Frango", "Creme de frango"
];

const descartaveis = [
    "Hamburguera de 300", "Hamburguera de 500", "Hamburguera grande",
    "Garfo Descartável", "Faca descartável", "Colher descartável", "Copo de água descartável",
    "Copo para suco descartável", "Copo de café pequeno", "Copo de isopor de café",
    "Tampa de suco", "Luva descartável", "Copo de sorvete", "Bolsa P", "Bolsa M",
    "Saco de lixo", "Saco azul", "Bolsa para colher", "Tampa de hamburgueira", 
    "Palito", "Canudo", "Bolsa para tapioca", "Forminhas de papel para coxinha",
    "Forminhas de papel para docinhos", "Colher de café", "Papel toalha", "Embalagem de papel pequeno", "Embalagem de papel grande", "guardanapo"
];

document.addEventListener("DOMContentLoaded", () => {
    const isLanches = document.title.includes("Lanches");
    const items = isLanches ? lanches : descartaveis;
    const storageKey = isLanches ? "estoqueLanches" : "estoqueDescartaveis";
    const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};
    const ul = document.getElementById(isLanches ? "estoque-list" : "estoque-descartaveis");

    const saveToLocalStorage = () => {
        localStorage.setItem(storageKey, JSON.stringify(savedData));
    };

    const renderList = () => {
        ul.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item}</span>
                <div class="item-controls">
                    <input type="number" value="${savedData[item] || 0}" min="0" onchange="updateItem('${item}', this.value)">
                </div>
            `;
            ul.appendChild(li);
        });
    };

    window.updateItem = (item, value) => {
        savedData[item] = parseInt(value) || 0;
        saveToLocalStorage();
    };

    renderList();
});

export function applyRegex_inputs() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const regex = /^[01e]*$/;
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (!regex.test(input.value)) {
                input.value = input.value.replace(/[^01e]/g, '');
                alert('Apenas "0", "1" e "e"')
            }
        });
    });
}

export function setInputHightlighs() {
    const inputs = document.querySelectorAll('.truthtable-table td input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('highlight');
        });
        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('highlight');
        });
    });
}

let STATE_TRUTHTABLE_GENERATED = false
export function genTruhTable(type) {
    const selectE_tt_dif = document.getElementById("select-truthtable-difficulty")
    const selectE_tt_sim = document.getElementById("select-truthtable-simbolos")
    const btn_gen_truthtable = document.getElementById("btn-gen-truthtable")

    function uptadeTruthTable() {
        const simboloNovo = selectE_tt_sim.value;
        console.log(simboloNovo)
    }

    if (type === "initial") {
        console.log("LOG: *func: genTruhTable : Initial");
        selectE_tt_dif.addEventListener("change", () => {
        if (STATE_TRUTHTABLE_GENERATED) {
            alert("Gere uma NOVA Tabela Verdade para ver as alterações.");
        } else {
            console.log("DEBUG: tabela nao gerada ainda")
        }
        });
        selectE_tt_sim.addEventListener("change", uptadeTruthTable);
        btn_gen_truthtable.addEventListener("click", () => { genTruhTable("new") });
        return
    }

    if (type === "new") {
        console.log("LOG: *func: genTruhTable : New");
        STATE_TRUTHTABLE_GENERATED = !STATE_TRUTHTABLE_GENERATED

        const diff = selectE_tt_dif.value;
        console.log(diff)

        applyRegex_inputs()
        setInputHightlighs()
    }

}
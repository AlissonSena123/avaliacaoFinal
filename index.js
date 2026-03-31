import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm' 

const SUPABASE_URL = "https://ewrvpmczimetujpgsdvg.supabase.co"
const SUPABASE_KEY = "sb_publishable_dswy_g4cAHuN-9EBdu9ZEQ_lOoPlfrv"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const paciente = {
        nome: document.getElementById("idNome").value,
        telefone: document.getElementById("idTelefone").value,
        email: document.getElementById("idEmail").value
    }

    if(![paciente]){
        alert("Digite os valores");
    }

    try {
        const { data, error } = await supabase
            .from("paciente")
            .insert({
                NOME: paciente.nome,
                CELULAR: paciente.telefone,
                EMAIL: paciente.email
            });
        
        if(error){
            console.log("ERRO: ", error);
            alert("Erro ao cadastrar paciente");
        }

        alert("Paciente Cadastrado com Sucesso!");

    } catch (error) {
        console.log("ERRO: ", error);
    }
})
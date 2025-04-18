import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import api from "../../services/api";

function GeradorReceita(){

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');

    const [receitaResponse, setReceitaResponse] = useState('');
    
    const gerarReceitaAI = async () => {

        try {
            // método chamado com 'await' para ser executado e aguardar o seu retorno
            // {{base_url}}/recipe-creator?ingredients=arroz,feijão,bife,salada&cuisine=brasileira&dietaryRestrictions=livre

            const response = await api.get(`recipe-creator`, {
                params: {
                    ingredients,
                    cuisine,
                    dietaryRestrictions
                }
            })

            const data = await response.data;
            console.log(data);
            setReceitaResponse(data);

        } catch (error) {
            console.log("Erro na geração da receita: ", error);
        }
    }

    return (
        <div>
            <h2>Geração de receitas</h2>

            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Informe os ingredientes (separados por vírgula)"
            />

            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Informe qual o tipo de cozinha, ex.: brasileira"
            />

            <input
                type="text"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder="Informe, caso exista, algum tipo de restrição alimentar"
            />

            <button
                onClick={gerarReceitaAI}>
                    Gerar receita
            </button>

            <div className="output">
                <ReactMarkdown>
                    {receitaResponse}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default GeradorReceita;
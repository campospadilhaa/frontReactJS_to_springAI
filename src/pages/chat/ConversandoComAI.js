import React, { useState } from "react";
import api from "../../services/api";

function ConversandoComAI(){

    // inciado o prompt que será exibido na tela
    const [prompt, setPrompt] = useState('');

    // para receber a resposta da requisição
    const [conversaResponse, setConversaResponse] = useState('');

    // ação que será executada na ação onClick do button
    const perguntarAI = async () => {

        try {
            // método chamado com 'await' para ser executado e aguardar o seu retorno
            // {{base_url}}/ask-ai-options?prompt=Liste, por favor, as principais universidade de Belo Horizonte/MG

            // o método 'ask-ai-options' utiliza parâmetros que para serem utilizados é necessário pagar o ChatGPT
            //const response = await api.get(`ask-ai-options`, {
            const response = await api.get(`ask-ai`, {
                params: {prompt}
            })

            const data = await response.data;
            console.log(data);
            setConversaResponse(data);

        } catch (error) {
            console.log("Erro na resposta da conversa: ", error);
        }
    };

    return (
        <div>
            <h2>Converse com AI</h2>

            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Informe uma questão para a AI"
            />

            <button
                onClick={perguntarAI}>
                    Perguntar a AI
            </button>

            <div className="output">
                <p>
                    {conversaResponse}
                </p>
            </div>
        </div>
    );
}

export default ConversandoComAI;
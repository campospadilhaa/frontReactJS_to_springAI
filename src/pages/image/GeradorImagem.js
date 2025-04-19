import React, { useState } from "react";
import api from "../../services/api";

function GeradorImagem(){

    const [prompt, setPrompt] = useState('');
    const [qualidade, setQualidade] = useState('hd');
    const [quantidade, setQuantidade] = useState('1');
    const [altura, setAltura] = useState('1024');
    const [largura, setLargura] = useState('1024');
    const [imageUrls, setImageUrls] = useState([]);

    const gerarImagemAI = async () => {

        try {

        // {{base_url}}/ai/generate-image?prompt=passaro bonitinho
        const response = await api.get(`generate-image`, {
                params: {
                    prompt,
                    quality: qualidade,
                    quantidade,
                    altura,
                    largura
                }
            })

            const data = await response.data;
            console.log(data);
            setImageUrls(data);

        } catch (error) {
            console.log("Erro na geração da receita: ", error);
        }
    }

    return (
        <div>
            <h2>Geração de imagens</h2>

            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Informe a descrição da imagem que deverá ser gerada"
            />

            <button
                onClick={gerarImagemAI}>
                    Gerar imagem
            </button>

            <div className="image-grid">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />
                ))}
                {[...Array(4- imageUrls.length)].map((_, index) => (
                    <div key={index + imageUrls.length}
                        className="empty-image-slot">
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GeradorImagem;
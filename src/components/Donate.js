import React, { useState } from 'react';
import qrcode from "./../assets/qrcode.jpg"

export function Donate(){
    const [showQrCode, setShowQrCode] = useState(false);


    const copyToClipboard = () => {
        const textToCopy = '53.553.999/0001-62';
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Texto copiado com sucesso!');
                alert('Texto copiado: ' + textToCopy);
            })
            .catch((err) => {
                console.error('Erro ao copiar o texto: ', err);
            });
    };

    const toggleQrCode = () => {
        setShowQrCode(!showQrCode); // Alternar entre mostrar e ocultar o QR Code
    };

    return(
        <section id="donateSection">
            <h2 className="title1">Ajude-nos</h2>
                <div className="donateDiv" id="donateDiv">
                    <h3 id="doar">DOAR</h3>
                    <div className="donatePayDiv">
                    <button className="donatePay"
                    onClick={copyToClipboard}>Copiar Pix!</button>

                    <button className="donatePay"
                    onClick={toggleQrCode}>qrcode</button>
                    </div>
                </div>
                {showQrCode && <img src={qrcode} className="qrcode" alt="QR Code" />}
            <span></span>
        </section>
    )
}
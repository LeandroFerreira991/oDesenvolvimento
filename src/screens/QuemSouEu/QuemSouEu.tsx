import { Container } from "../../common-componets/Container";
import { TitleRegular } from "../../common-componets/Title";
import './quem-sou-eu-style.css';
import axios from "axios";
import React from "react";

function QuemSouEu() {
    const [adress, setAdress] = React.useState<any>({});
    const [showResults, setShowResults] = React.useState(false);

    React.useEffect(() => {
        axios.get(`http://viacep.com.br/ws/07085400/json/`)
        .then((response: any) => {
            setAdress(response.data);
        });
    }, []);

    return (
        <div>
            <Container color={'#43AEDC'}>
                <TitleRegular color={'#000000'}>OLÁ SOU <br /> LEANDRO</TitleRegular>
            </Container>
            <section className="quem__sou__eu__section">
                <div className="quem__sou__eu__section__item">
                    <TitleRegular color={'#43AEDC'}>QUEM SOU EU</TitleRegular>
                </div>
                <div className="quem__sou__eu__section__item">
                    <p>
                        Tenho 31 anos, sou pai da Alice, ela tem 7 anos.
                    </p>
                    <p>
                        Faço parte de uma família incrível, sou o irmão do meio. 
                       .
                    </p>
                    <p>
                        Moro em Guarulhos, cidade grande e com muitos desafios, mas apesar disso cresci em  
                        rua tranquila, o que permitiu ter uma infância de muitas brincadeiras na rua. 
                    </p>
                    <p>
                        Pesquise meu endereço para ver como a minha rua é incrível <br />
                        <button onClick={() => {setShowResults(true)}}>VER ENDEREÇO</button>
                    </p>
                    {
                        showResults ? <p>Meu Endereço: {adress?.logradouro}, {adress?.bairro} - {adress?.localidade} {adress?.uf}</p> : <p></p>
                    }
                 
                </div>
            </section>
        </div>
    );
}
export default QuemSouEu;

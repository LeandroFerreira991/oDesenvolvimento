import { Container } from "../../common-componets/Container";
import { TextBold } from "../../common-componets/TextBold";
import { TitleRegular } from "../../common-componets/Title";
import './experiencias-style.css'

function Experiencias() {
	return (
		<div>
			<Container color={'#F17400'}>
				<TitleRegular color={'#000000'}>EXPERIÊNCIAS</TitleRegular>
			</Container>
			<section className="experiencia__section">
				<div className="experiencia__section__item">
					<TextBold>Palestrante</TextBold>
					<p>Ministrei centenas de treinamentos de vendas, motivação e de produtos
						para milhares de pessoas ao longo de 8 anos..
					</p>
				</div>
				<div className="experiencia__section__item">
					<TextBold>Vendas</TextBold>
					<p> Desenvolvi a habildade de vender ao longo de 10 anos trabalhando na area..
					</p>
				</div>
			</section>
		</div>
	);
}

export default Experiencias;
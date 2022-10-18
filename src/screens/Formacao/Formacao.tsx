import { Container } from "../../common-componets/Container";
import { TitleRegular } from "../../common-componets/Title";
import { TextBold } from "../../common-componets/TextBold";
import './formacao-style.css';

function Formacao() {
	return(
		<div>
			<Container color={'#A930F3npm'}>
				<TitleRegular color={'#000000'}>FORMAÇÃO</TitleRegular>
			</Container>
			<section className="formacao__section">
				<div className="formacao__section__item">
					<TextBold>Tec. em Mecânica</TextBold>
					<p>Em 2009 eu me formei em técnico em mecânica pela ETEC. 
						..
					</p>
				</div>
				<div className="formacao__section__item">
					<TextBold>Operador e Programador em CNC</TextBold>
					<p>Em 2012 eu me formei como programador CNC pelo SENAI..
					</p>
				</div>
				<div className="formacao__section__item">
					<TextBold>Dev Full Stack</TextBold>
					<p>Em 2023 vou me formar em Sistemas para Internet-Full Stack
						pela FIAP..
					</p>
				</div>
			</section>
		</div>
	);
}

export default Formacao;
import { Container } from "../../common-componets/Container";
import { TextBold } from "../../common-componets/TextBold";
import { TitleRegular } from "../../common-componets/Title";
import './hobbies-style.css';

function Hobbies() {
	return (
		<div>
			<Container color={'#1AA703'}>
				<TitleRegular color={'#000000'}>HOBBIES</TitleRegular>
			</Container>
			<section className="hobbie__section">
				<div className="hobbie__section__item">
					<TextBold>Musculação</TextBold>
					<p>Pratico musculação todos os dias há mais de 5 anos..
					</p>
				</div>
				<div className="hobbie__section__item">
					<TextBold>Skils</TextBold>
					<p>
                      Gosto muito de assistir séries e filmes..
                    </p>
				</div>
			</section>
		</div>
	);
}

export default Hobbies;
import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";

const Hero = () => {
	const theme = useContext(ThemeContext)[0];
	const currentTheme = AppTheme[theme];

	return (
		<React.Fragment>
			<div
				style={{
					background: `${currentTheme.background}`,
					padding: "2rem",
					textAlign: "center",
					color: `${currentTheme.textColor}`,
					border: `${currentTheme.border}`,
				}}>
				<h1>Context API theme toggler</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
					debitis, in consectetur voluptates suscipit harum cupiditate quas
					incidunt tempora recusandae perspiciatis aperiam, ad dolorem repellat
					aspernatur qui et voluptatem quidem. Recusandae sapiente minima,
					assumenda, non dolores quisquam natus porro quas tempora repellendus
					consequuntur sint ut, beatae officia iste. Iste autem ipsum earum
					minima numquam corporis delectus consectetur repudiandae illo maiores?
					Sed consequatur reiciendis totam similique, veniam iure nisi harum
					numquam! Voluptate vero vel nobis, fugit ea qui ex nulla magnam est
					ducimus nostrum consequatur alias a quod minus voluptates repudiandae
					laborum aliquid similique, asperiores molestias ipsa tempore autem?
					Sapiente unde, quam enim nostrum sit perferendis! Quis placeat iure
					debitis porro exercitationem ipsa nam magni delectus rem vero?
					Perferendis perspiciatis, consequatur a, temporibus quia quaerat harum
					facilis delectus rerum, veritatis similique amet excepturi ducimus
					adipisci fuga molestiae nulla tempora! Possimus totam officiis eum
					tempore animi cupiditate mollitia, ut hic perferendis est saepe
					accusantium, dolores, ipsum natus unde porro? Excepturi eveniet modi
					dignissimos eum, maxime ipsam alias harum, asperiores, quae dolore
					culpa quam totam possimus. Officia doloremque commodi facilis nobis
					sed et fugit dolor doloribus, a quas. Dolores asperiores ipsa commodi
					laborum esse dolorem, ipsum odit libero qui quis fugit aliquid,
					mollitia, iusto magnam? Quod illum tempore fugiat ipsa ab aspernatur
					beatae, quae quidem, cum tempora hic! Sed impedit quae in corporis
					provident reprehenderit ducimus itaque veniam placeat, fuga cumque
					vitae accusamus ullam culpa. Sint, quaerat blanditiis odit obcaecati
					ipsum placeat natus sit sapiente, dolorum, consectetur eos atque
					labore accusantium et adipisci. Assumenda eum tenetur commodi dolor
					voluptatum expedita? Eos necessitatibus tempora optio voluptatum
					quisquam. Impedit ut veritatis quod distinctio quasi, amet laudantium.
					Harum officia, quod qui magnam consequuntur eum minima nam quis ea
					tempora neque inventore commodi totam velit sapiente id assumenda
					laudantium expedita dolorum sunt nobis! Explicabo praesentium repellat
					inventore culpa aspernatur, tempora esse autem, exercitationem
					laboriosam earum odit similique ullam! Laborum, a veniam autem magni
					et dolorum! Illo quibusdam, deserunt quae iusto nisi voluptatibus
					similique nihil corrupti? Laborum, aut maxime voluptatum eveniet
					architecto est perferendis in asperiores tempore, adipisci tenetur!
					Suscipit exercitationem saepe explicabo quis eveniet, modi, maiores
					porro libero commodi mollitia, optio vitae dolores pariatur et nisi
					obcaecati labore non qui ullam quam at dolorum hic facilis voluptatem.
					Tenetur, cupiditate sunt omnis corporis architecto nostrum voluptate,
					dolor dolorem magnam totam repudiandae harum dolore laudantium
					recusandae autem. Laborum totam quam voluptatum aspernatur enim saepe
					facere aperiam obcaecati molestiae doloremque exercitationem ipsa
					ducimus rerum, optio commodi repellat delectus vitae fugiat veritatis,
					quae corporis numquam mollitia illum consectetur. Animi similique odio
					minima quo rerum fugiat voluptates iste adipisci, ipsum quaerat.
					Recusandae consequatur quasi doloribus rem dignissimos deserunt
					dolorum quisquam molestias, ut voluptatem ducimus minus fuga magni
					repellendus accusamus impedit eum cumque odit ex nisi officia
					cupiditate. Pariatur officia sapiente iure debitis molestias quod
					quasi neque incidunt, aliquam expedita dicta doloremque dolorum esse
					optio consectetur quo sed tempore voluptatibus. Voluptatibus fugiat
					aliquam unde corrupti nam, perferendis itaque, atque velit distinctio
					voluptates quaerat, excepturi soluta neque reprehenderit odit.
					Inventore fugit expedita reiciendis maiores?
				</p>
				<button
					style={{
						background: "#26ae60",
						padding: "10px 24px",
						fontSize: "22px",
						color: "#f0f0f0",
						border: `${currentTheme.border}`,
					}}>
					Not to Click
				</button>
			</div>
		</React.Fragment>
	);
};

export default Hero;

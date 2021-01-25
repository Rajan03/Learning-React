import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {Themes} from "../Themes";

const Hero = () => {
	const [color, setColor] = useContext(ThemeContext);
	return (
		<div
			style={{
				background: `${color.background}`,
				color: `${color.Color}`,
				padding: `30px`,
				letterSpacing: `2px`,
			}}>
			<h1>Context API theme toggler</h1>
			<h2>{JSON.stringify(color)}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores
				harum suscipit quibusdam iure praesentium? Incidunt ducimus qui
				obcaecati dolorem quaerat, sed excepturi provident beatae quibusdam ipsa
				nulla ut inventore? Perferendis, nihil. Perferendis, molestias totam
				nobis omnis harum itaque nesciunt voluptas beatae. Doloremque voluptate
				esse ullam ipsam nulla dolorum et a cupiditate consequuntur. Laudantium
				laboriosam porro dolorem hic velit eos delectus placeat repellat a
				quisquam aperiam magnam expedita iure asperiores adipisci praesentium,
				modi minima sapiente optio sunt fugit voluptas consequatur consectetur
				ullam! Consectetur, voluptate nihil. Provident tempore eaque ullam
				deserunt modi minus ducimus fugiat consectetur ut? In necessitatibus
				nemo esse molestias cum ipsum non facere sequi suscipit praesentium,
				quod adipisci, ad minus mollitia. Maiores distinctio fugiat ducimus
				ipsam magnam qui earum reiciendis ea odit aut explicabo dolore itaque
				aspernatur deserunt eum, aperiam illo delectus blanditiis, nobis minima
				dicta. Totam ad aliquam doloribus labore voluptatem, maiores iure.
				Distinctio obcaecati aliquam tempora tempore ut libero pariatur dolores
				ea necessitatibus asperiores architecto sapiente, blanditiis praesentium
				minima, velit incidunt eos sint similique a non fuga quis magnam nihil
				at! Suscipit aut laborum eligendi saepe. In, ab id. Eum eligendi error
				deleniti maiores tempora alias veniam ut in porro autem exercitationem
				natus aspernatur amet quibusdam doloremque soluta tenetur est, aliquid,
				obcaecati, illo nisi architecto magnam nesciunt? Odit id eveniet
				provident soluta, quas facere iure nisi ipsam praesentium sit inventore
				odio vero placeat alias fugiat itaque repudiandae corrupti aperiam
				voluptas? Reiciendis nisi, eos nihil impedit tempora quo, ipsam autem
				sint minus non ipsum ducimus assumenda ut, debitis quas iusto aperiam
				suscipit sunt accusamus nostrum ea error maiores voluptas vitae.
				Mollitia impedit consequuntur ut nemo nobis accusantium earum dicta,
				corrupti vel consequatur, maiores numquam vitae, sit iste sed labore
				beatae incidunt corporis delectus quidem? Iste rem earum obcaecati
				beatae, modi sequi voluptate asperiores totam maiores animi
				necessitatibus sapiente similique tempore, doloribus, soluta excepturi
				veniam voluptatem minus magnam ipsum velit! Facere iusto maiores magnam
				molestias eos asperiores omnis dicta alias vel maxime possimus eius
				dolorum, blanditiis id nobis modi inventore optio quas, atque illum?
				Recusandae odit ducimus, vel labore quam architecto magnam, nisi sint
				impedit voluptates repellendus accusantium maxime similique pariatur
				quis necessitatibus quod nihil esse, culpa exercitationem! Quis facere
				et maiores est accusantium maxime ad fugit iure, laborum molestias,
				distinctio nobis asperiores non, aperiam cumque. Aliquid expedita,
				commodi inventore quas optio, itaque accusantium sequi aspernatur nisi
				eaque dolor quibusdam, quia nostrum harum architecto debitis maiores non
				illo porro corporis? Laudantium nam officiis deserunt quibusdam
				voluptas! Numquam, illo est, reiciendis alias veritatis, tenetur facere
				ut facilis sint rem dolores nostrum voluptates quaerat repellendus
				placeat. Facilis officiis alias omnis rem, praesentium totam illo
				exercitationem minus sit, adipisci cumque voluptatem dolor temporibus
				quo dolorum molestiae! Sapiente hic dignissimos doloremque, provident
				harum, accusamus voluptate quia distinctio quas aliquid doloribus quam
				porro molestias, alias impedit minus inventore modi neque fugit
				corrupti. Alias quidem doloremque tenetur rerum incidunt laudantium,
				iure consequuntur, commodi sequi sit modi. Doloremque, temporibus
				consequatur natus optio neque nobis iste officiis voluptatum autem vel
				obcaecati fugit non deleniti perferendis beatae.
			</p>
			<button
				onClick={() => {
					color === Themes[0] ? setColor(Themes[1]) : setColor(Themes[0]);
				}}>
				Change Theme
			</button>
		</div>
	);
};

export default Hero;

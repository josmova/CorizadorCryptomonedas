import styled from "@emotion/styled";

const Contenedor = styled.div`
	color: #fff;
	font-family: "lato", sans-serif;
	display: flex;
	align-items: center;
	gap: 3rem;
	margin-top: 20px;
`;

const Imagen = styled.img`
	display: block;
	width: 130px;
`;

const Texto = styled.p`
	font-size: 18px;
	span {
		font-weight: 700;
	}
`;

const Precio = styled.p`
	font-size: 24px;
	span {
		font-weight: 700;
	}
`;

export const Resultado = ({ cotizacion }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		cotizacion;
	return (
		<Contenedor>
			<Imagen
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt="imagen cripto"
			/>
			<div>
				{" "}
				<Precio>
					El precio es de: <span> {PRICE} </span>
				</Precio>
				<Texto>
					Precio más alto del día: <span> {HIGHDAY} </span>
				</Texto>
				<Texto>
					Precio más bajo del día: <span> {LOWDAY} </span>
				</Texto>
				<Texto>
					Varación últimas 24 horas: <span> {CHANGEPCT24HOUR} </span>
				</Texto>
				<Texto>
					Última Actualización: <span> {LASTUPDATE} </span>
				</Texto>
			</div>
		</Contenedor>
	);
};

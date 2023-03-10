import { StyledHistoric, UlHistoric } from "./style";
import { iUserToys } from "../../interfaces";
import { CardHistoricBuy } from "../CardHistoricBuy";

interface iHistoric {
  historicList: iUserToys[];
}

export function Historic({ historicList }: iHistoric) {
  return (
    <StyledHistoric>
      <UlHistoric>
        <h2>Histórico de compras</h2>
        {historicList.length > 0 ? (
          historicList.map((element) => (
            <CardHistoricBuy
              key={element.id}
              toy_name={element.toy_name}
              price={element.price}
              img={element.img}
              id={element.id}
            />
          ))
        ) : (
          <h3>Você ainda não comprou produtos</h3>
        )}
      </UlHistoric>
    </StyledHistoric>
  );
}

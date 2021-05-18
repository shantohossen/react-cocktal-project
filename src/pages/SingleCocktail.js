import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktailsDetails, setCocktailDetails] = React.useState(null);
  const [loading, setloading] = React.useState(true);

  async function featchSingelItem() {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data) {
        // const details = data.drinks[0];
        // console.log(details);
        let {
          idDrink,
          strDrink,
          strDrinkThumb,
          strGlass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const purifiedData = {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          glass: strGlass,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
        setCocktailDetails(purifiedData);
        setloading(false);
      }
    } catch (error) {
      console.log(error);

      setloading(false);
    }
  }

  React.useEffect(() => {
    featchSingelItem();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!setCocktailDetails) {
    return (
      <div className="section-sitle">
        There is no details found for this dirnk
      </div>
    );
  }
  let { name, glass, img, ingredients } = cocktailsDetails;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>

          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>

          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch('https://react-http-2b82b-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error;
      }
      const dataResponse = await response.json();
      let loadedMeals = []

      for (const key in dataResponse) {
        loadedMeals.push({
          id: key,
          name: dataResponse[key].name,
          description: dataResponse[key].description,
          price: dataResponse[key].price
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    getApiData().catch(error => {
      setIsLoading(false);
      setHttpError('Error in loading the data');

    });

  }, [])
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Data Loading Please Wait....</p>
      </section>
    )
  }
  if (!isLoading && httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>

      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

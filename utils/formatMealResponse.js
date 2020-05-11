export default function formatMeals(meals) {
  return meals.map(meal => {
    const tags = meal.strTags ? meal.strTags.split(",") : [];

    const ingredients = new Array(20).fill().reduce((ingredients, el, i) => {
      if (!meal[`strIngredient${i + 1}`]) return ingredients;
      return ingredients.concat({
        name: meal[`strIngredient${i + 1}`].trim(),
        measure: meal[`strMeasure${i + 1}`].trim()
      });
    }, []);

    const output = Object.keys(meal).reduce((mealAcc, key) => {
      if (/str(Ingredient|Measure|Tags)/.test(key)) return mealAcc;
      return { ...mealAcc, [key]: meal[key] };
    }, {});

    return { ...output, ingredients, tags };
  });
}

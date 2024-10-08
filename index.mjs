import { Ingredients } from "./ingredients.mjs";
import { getData } from "./service.mjs";




const execute = async () => {

    try {
        
        const data = await getData();

        // Create the ingredients
        const ingredients = Ingredients.load(data);

        

        

    } catch (error) {
        console.log(error.message);
    }
}




execute();



export function showIngredients(ingredients) {

    console.log("--------------------------------------------------------------------------");
    console.log("    Showing All The Ingredients ");    
    console.log("--------------------------------------------------------------------------");
    
    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];
        console.log("Name ~~~> "+ ingredient.name);
        console.log("Value ~~~> "+ ingredient.value);
        console.log("Weight ~~~> "+ ingredient.weight);
        console.log("Effects");
        for (let i = 0; i < ingredient.effects.length; i++) {
            const effect = ingredient.effects[i];

            const type = (effect.type === 'harmful') ? 'Poison': (effect.type === 'beneficial') ? 'Potion' : '';

            console.log(type +" of "+ effect.name);
            
        }
        
        
    }
}

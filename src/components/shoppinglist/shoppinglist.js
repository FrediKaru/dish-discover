import { getDatabase, ref, set, get, child } from "firebase/database";
import { database } from "../../config/firebase";

export async function getShoppinglist() {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, "shoppinglists/0"));
  if (snapshot) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("No lists found");
  }
}

export async function addToShoppinglist(listId, recipe, quantity) {
  const db = getDatabase();
  const dbRef = ref(db, `shoppinglists/${listId}`);

  try {
    const shoppinglistSnapshot = await get(dbRef);
    let shoppinglistObj = shoppinglistSnapshot.val() || {};

    let shoppinglistArr = Object.values(shoppinglistObj);

    shoppinglistArr.push({
      title: recipe.title,
      ingredients: recipe.extendedIngredients,
      id: recipe.id,
      quantity: quantity,
    });

    await set(ref(db, `shoppinglists/${listId}`), shoppinglistArr);

    console.log("Recipe added to shoppinglist:", recipe);
    return true;
  } catch (error) {
    console.error("Error adding recipe to shoppinglist:", error);
    return false;
  }
}

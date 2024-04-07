const verify = (drink) => {
  // Separar el input por las comas y guardarlas en la variable
  const drinkParts = drink.split(',')
  // Comprobar que el array tenga al menos dos elementos, que deberían ser el nombre y el tamaño
  if(drinkParts.length < 2 || drinkParts.length > 6) return false
  // Comprobar si el nombre es menor a dos caracteres o mayor a 15
  if(drinkParts[0].length < 2 || drinkParts[0].length > 15) return false
  // Comprobar que el nombre contenga únicamente strings
  if(parseInt(drinkParts[0])) return false

  //Recorrer el nombre para verificar que contenga únicamente caracteres alfabéticos
  for(let i = 0; i < drinkParts[0].length; i++) {
    if(!(drinkParts[0][i] >= 'a' && drinkParts[0][i] <= 'z') && !(drinkParts[0][i] >= 'A' && drinkParts[0][i] <= 'Z')) return false
   }

  // Recorrer los tamaños de la bebida
  for(let i = 1; i < drinkParts.length; i++) {
    //Comprobar que el tamaño sea solo un número, intentando convertirlo a int y si no funciona no es válido
    if(!parseInt(drinkParts[i])) return false 
    // Comprobar que el tamaño se encuentre dentro del rango definido
    if(drinkParts[i] < 1 || drinkParts >= 48) return false
    // Comprobar que los números se encuentren en orden ascendente
    if(drinkParts[i] >= drinkParts[i + 1]) return false
  }
  return true
}

module.exports = verify;
import { addDoc,collection,getFirestore } from "firebase/firestore"

function Agregar() {
    const item = {
        title: "Monster Hunter World",
        description: "Monster Hunter: World es un videojuego de rol y acción, ambientado en un entorno de mundo abierto, y jugado desde una perspectiva en tercera persona. Al igual que en los juegos anteriores de la serie, el jugador toma el papel de un 'Cazador' que tiene la tarea de la 'Comisión de Investigación', para perseguir y matar (o capturar) a grandes monstruos, que deambulan fuera de su base central de Astera para que estudien.",
        categoryId: "Juego 2",
        imageId: "MonsterHunterWorld.jpg",
        Price: 1200,
       
    };

    // Conectamos a la db

    const db = getFirestore();

    // Referencia a la colección "Items"

    const itemsCollection = collection(db, "Items");


        addDoc(itemsCollection, item).then(({ id }) => {
            console.log(id);
            console.log("Producto agregado correctamente")
        });
  

    return (
        <div>Agregando item</div>
    );
}

export default Agregar;
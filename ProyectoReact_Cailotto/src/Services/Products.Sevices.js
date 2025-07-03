import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../Config/Config";



     export const getItem = async () => {
        

      const itemCollection = collection(db,"Items");


      const datos = await getDocs(itemCollection)

        console.log(datos,"datos")

        return datos.docs.map(docu => ({
            ...docu.data(),
            id: docu.id
        }))

        

      }

      export const getItemById = async (id) => {
        // const itemCollection = collection(db,"Items");
        const docRef = doc(db,"Items",id);
        const docSnap = await getDoc(docRef);
        console.log(docRef,"docRef")

        if (docSnap.exists()) {
            return { ...docSnap.data(), id: docSnap.id };
        } else {
            console.log("No such document!");
            return null;
        }
      }


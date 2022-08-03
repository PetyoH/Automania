import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import db from "../firebase";



export const getAllCars = async () => {
    const querySnapshot = await getDocs(collection(db, "cars"));

    return querySnapshot.docs.map(doc => ({
        _id : doc.id,
        ...(doc.data())
    }));
}

export const getOneCar = async (carId) => {
    const docRef = doc(db, "cars", carId);
    const docSnap = await getDoc(docRef);

    
    console.log(docSnap.data());
    return docSnap.data();
}

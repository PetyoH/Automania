import { collection, doc, getDocs, getDoc, addDoc, deleteDoc, setDoc, query, limit, Timestamp, orderBy } from "firebase/firestore";
import db from "../firebase";

const carReference = collection(db, "cars");


export const getAllCars = async () => {

    const q = query(carReference, orderBy("createdAt"));

    const querySnapshot  = await getDocs(q);


    return querySnapshot.docs.map(doc => ({
        _id: doc.id,
        ...(doc.data()),

    }));
}


export const getLatestCars = async () => {

    const q = query(carReference, orderBy("createdAt"), limit(6));

    const querySnapshot = await getDocs(q);


    return querySnapshot.docs.map(doc => ({
        _id: doc.id,
        ...(doc.data())
    }));
}   


export const getOneCar = async (carId) => {
    const docRef = doc(db, "cars", carId);
    const docSnap = await getDoc(docRef);

    return {...docSnap.data(), _id: carId};
}

export const createCar = async (carData) => {
    const allData = {...carData, createdAt: Timestamp.now()}

    const docRef = await addDoc(carReference, allData);

    return { ...allData, _id: docRef.id };
}

export const deleteCar = async (carId) => {
    await deleteDoc(doc(db, "cars", carId));
}

export const editCar = async (carId, carData, createdAt, ownerId) => {
    const docRef = doc(db, "cars", carId);

    const allData = { ...carData, createdAt, ownerId};

    await setDoc(docRef, { ...allData });

    const decoratedData =  { ...carData, _id: docRef.id, ownerId}

    return decoratedData;
}
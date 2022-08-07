import { collection, doc, getDocs, getDoc, addDoc, deleteDoc, setDoc, query, limit, Timestamp, orderBy, updateDoc } from "firebase/firestore";
import db from "../firebase";

const carReference = collection(db, "cars");


export const getAllCars = async () => {

    const q = query(carReference, orderBy("createdAt", "desc"));

    const querySnapshot  = await getDocs(q);


    return querySnapshot.docs.map(doc => ({
        _id: doc.id,
        ...(doc.data()),
    }));
}


export const getLatestCars = async () => {

    const q = query(carReference, orderBy("createdAt", "desc"), limit(6));

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

export const editCar = async (carId, carData, createdAt, ownerId, likes, comments) => {
    const docRef = doc(db, "cars", carId);

    const allData = { ...carData, createdAt, ownerId, likes, comments};

    debugger

    await setDoc(docRef, { ...allData });

    return  { ...allData, _id: docRef.id}
}

export const likeCar = async (carId, likes) => {
    const likesRef = doc(db, "cars", carId);

    await updateDoc(likesRef, { likes });

    return likes;
}

export const commentCar = async (carId, carData, comments) => {
    const commentsRef = doc(db, "cars", carId);

    const allData = {...carData, comments};

    await setDoc(commentsRef, {...allData});

    return comments;
}
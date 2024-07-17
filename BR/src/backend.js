import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import config from './config.js';

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);

/**
 * Login para usuarios.
 * @param {Object} user - Objeto que contiene los datos del usuario.
 */
export async function login(user) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
        const token = await userCredential.user.getIdToken();
        return token;
    } catch (error) {
        throw new Error('Error al iniciar sesión: ' + error.message);
    }
};
export async function logout(user) {
    try {
        const userCredential = await (auth, user.email, user.password);
        const token = await userCredential.user.getIdToken();
        return token;
    } catch (error) {
        throw new Error('Error al iniciar sesión: ' + error.message);
    }
};
/**
 * Registra un nuevo usuario en la base de datos.
 * @param {Object} newUser - Objeto que contiene los datos del nuevo usuario.
 */
export async function registerUser(newUser) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
        const user = userCredential.user;
        const ValidateUser = await getUsers(newUser);
        if (ValidateUser.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phone: newUser.phone,
                address: newUser.address,
            });
            return { status: 'success', user };
        } else {
            return new Error({ status: 'error', message: 'El usuario ya existe' });
        }
    } catch (error) {
        return { status: 'error', message: error.message };
    }
}
export async function getUsers(newUser) {
    console.log(newUser.email);
    try {
        const user = await getDocs(collection(db, "users"));
        const res = user.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return res.filter(user => user.email === newUser.email);
    } catch (error) {
        console.error('Error fetching users: ', error);
    }
}
/**
 * Registra un nuevo salón en la base de datos.
 * @param {Object} newSalon - Objeto que contiene los datos del nuevo salón.
 */
export async function registerSalon(newSalon) {
    const state = auth.authStateReady;
    const user = auth.currentUser;
    if (state) {
        newSalon.userUid = user.uid;
        if (newSalon.name.trim() !== '') {
            try {
                const docRef = await addDoc(collection(db, 'salons'), newSalon);
                return docRef;
            } catch (error) {
                console.error('Error adding salon: ', error);
                return error;
            }
        }
    }

}
export async function getSalons() {
    try {
        const salons = await getDocs(collection(db, 'salons'));
        const data = salons.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return data;
    } catch (error) {
        console.error('Error fetching salons: ', error);
    }
}

/**
 * Reserva una nueva cita en la base de datos.
 * @param {Object} newReserve - Objeto que contiene los datos de la nueva cita.
 */
export async function reserveAppointment(newReserve) {
    if (newReserve.salon && newReserve.service && newReserve.date) {
        try {
            await addDoc(collection(db, 'reserves'), {
                salonId: newReserve.salon,
                service: newReserve.service,
                date: newReserve.date
            });
        } catch (error) {
            console.error('Error reserving appointment: ', error);
        }
    }
}

/**
 * Obtiene todos los diseños de la base de datos.
 * @returns {Array} - Lista de diseños.
 */
export async function fetchDesigns() {
    const designs = [];
    try {
        const querySnapshot = await getDocs(collection(db, 'designs'));
        querySnapshot.forEach((doc) => {
            designs.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error('Error fetching designs: ', error);
    }
    return designs;
}

/**
 * Envía una nueva reseña a la base de datos.
 * @param {Object} newReview - Objeto que contiene los datos de la nueva reseña.
 */
export async function submitReview(newReview) {
    if (newReview.text.trim() !== '') {
        try {
            await addDoc(collection(db, 'reviews'), {
                text: newReview.text,
                rating: newReview.rating
            });
        } catch (error) {
            console.error('Error submitting review: ', error);
        }
    }
}

/**
 * Obtiene todas las reseñas de la base de datos.
 * @returns {Array} - Lista de reseñas.
 */
export async function fetchReviews() {
    const reviews = [];
    try {
        const querySnapshot = await getDocs(collection(db, 'reviews'));
        querySnapshot.forEach((doc) => {
            reviews.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error('Error fetching reviews: ', error);
    }
    return reviews;
}
export async function fetchSalons() {
    const salons = [];
    try {
        const querySnapshot = await getDocs(collection(db, 'salons'));
        querySnapshot.forEach((doc) => {
            salons.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error('Error fetching salons: ', error);
    }
    return salons;
}

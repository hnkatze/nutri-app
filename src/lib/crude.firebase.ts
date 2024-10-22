import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";



const auth = getAuth();

export const login = async (email: string, password: string): Promise<void> => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
    } catch (error) {
        console.error("Error signing in:", error);
    }
};

export const logout = async (): Promise<void> => {
    try {
        await signOut(auth);
        console.log("User signed out successfully");
    } catch (error) {
        console.error("Error signing out:", error);
    }
};
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

import { types } from "../types/types";
import { uiEndLoading, uiStartLoading } from "./ui";
import { clearNotes } from "./notes";

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading());
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(login(user.uid, user.displayName));
        } catch (e) {
            console.log(e);
            if (e.message) {
                Swal.fire('Error', e.message, 'error');
            }
        } finally {
            dispatch(uiEndLoading());
        }
    };
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading());
            const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
            dispatch(login(user.uid, user.displayName))
        } catch (e) {
            console.log(e);
            if (e.message) {
                Swal.fire('Error', e.message, 'error');
            }
        } finally {
            dispatch(uiEndLoading());
        }
    };
};


export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading());
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await user.updateProfile({displayName: name});
            dispatch(login(user.uid, user.displayName));
        } catch (e) {
            console.log(e);
            if (e.message) {
                Swal.fire('Error', e.message, 'error');
            }
        } finally {
            dispatch(uiEndLoading());
        }
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        try {
            await firebase.auth().signOut();
            dispatch(logout());
            dispatch(clearNotes());
        } catch (e) {
            console.log(e);
            if (e.message) {
                Swal.fire('Error', e.message, 'error');
            }
        }
    };
};

export const logout = () => ({
    type: types.logout
});
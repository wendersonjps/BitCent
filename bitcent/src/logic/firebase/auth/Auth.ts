import {
    Auth,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    User as UserFirebase,
    onIdTokenChanged,
} from 'firebase/auth'
import { app } from '../config/app'
import User from '@/logic/core/user/User'

export type MonitorUser = (user: User | null) => void
export type MonitorCancel = () => void

export default class Authentication {
    private _auth: Auth

    constructor() {
        this._auth = getAuth(app)
    }

    async loginGoogle(): Promise<User | null> {
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider())

        return this.convertToUser(resp.user)
    }

    logout(): Promise<void> {
        return signOut(this._auth)
    }

    monitoring(notify: MonitorUser): MonitorCancel {
        return onIdTokenChanged(this._auth, async (userFirebase) => {
            const user = this.convertToUser(userFirebase)
            notify(user)
        })
    }

    private convertToUser(firebaseUser: UserFirebase | null): User | null {
        if (!firebaseUser?.email) return null
        const alternativeName = firebaseUser.email!.split('@')[0]

        return {
            id: firebaseUser.uid,
            name: firebaseUser.displayName ?? alternativeName,
            email: firebaseUser.email,
            imageUrl: firebaseUser.photoURL,
        }
    }
}

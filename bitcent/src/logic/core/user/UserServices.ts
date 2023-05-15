import Authentication, { MonitorCancel,MonitorUser } from '@/logic/firebase/auth/Auth'
import Collection from '@/logic/firebase/db/Collection'
import User from './User'

export default class UserServices {
    private _authentication = new Authentication()
    private _collection = new Collection()

    authMonitor(observer: MonitorUser): MonitorCancel {
        return this._authentication.monitoring(async (user) => {
            observer(
                user
                    ? {
                          ...user,
                          ...(await this.consult(user.email)),
                      }
                    : null
            )
        })
    }

    async loginGoogle(): Promise<User | null> {
        const user = await this._authentication.loginGoogle()
        if (!user) return null

        let dbUser = await this.consult(user.email)
        if (!dbUser) dbUser = await this.save(user)

        return { ...user, ...dbUser }
    }

    logout(): Promise<void> {
        return this._authentication.logout()
    }

    async save(user: User) {
        return await this._collection.save('users', user, user.email)
    }

    async consult(email: string) {
        return await this._collection.consultById('users', email)
    }
}

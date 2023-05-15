import {
    DocumentData,
    DocumentSnapshot,
    OrderByDirection,
    QueryConstraint,
    WhereFilterOp,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    query,
    setDoc,
    where,
} from 'firebase/firestore'
import { app } from '../config/app'
import Id from '@/logic/core/shared/Id'

export interface Filter {
    attribute: string
    op: WhereFilterOp
    value: any
}

export default class Collection {
    async save(path: string, entity: any, id?: string): Promise<any> {
        const db = getFirestore(app)
        const idFinal = id ?? entity.id ?? Id.new()
        const docRef = doc(db, path, idFinal)
        await setDoc(docRef, entity)

        return {
            ...entity,
            id: entity.id ?? idFinal,
        }
    }

    async delete(path: string, id?: string): Promise<boolean> {
        if (!id) return false
        const db = getFirestore(app)
        const docRef = doc(db, path, id)
        const dbItem = await getDoc(docRef)
        if (!dbItem.exists()) return false
        await deleteDoc(docRef)

        return true
    }

    async consult(
        path: string,
        sortFor?: string,
        direction?: OrderByDirection
    ): Promise<any[]> {
        const db = getFirestore(app)
        const collectionRef = collection(db, path)
        const filter: QueryConstraint[] = []
        const ordination = sortFor ? [orderBy(sortFor, direction)] : []
        const consult = query(collectionRef, ...filter, ...ordination)
        const result = await getDocs(consult)

        return result.docs.map(this._convertFromFirebase) ?? []
    }

    async consultById(path: string, id: string): Promise<any> {
        if (!id) return null
        const db = getFirestore(app)
        const docRef = doc(db, path, id)
        const result = await getDoc(docRef)

        return this._convertFromFirebase(result)
    }

    async consultByFilters(
        path: string,
        filters: Filter[],
        sortBy?: string,
        direction?: OrderByDirection
    ): Promise<any[]> {
        const db = getFirestore(app)
        const collectionRef = collection(db, path)

        const filtersWhere =
            filters?.map((f) => where(f.attribute, f.op, f.value)) ?? []
        const order = sortBy ? [orderBy(sortBy, direction)] : []

        const consult = query(collectionRef, ...filtersWhere, ...order)
        const result = await getDocs(consult)

        return result.docs.map(this._convertFromFirebase) ?? []
    }

    private _convertFromFirebase(snapshot: DocumentSnapshot<DocumentData>) {
        if (!snapshot.exists()) return null
        const entity: any = { ...snapshot.data(), id: snapshot.id }
        if (!entity) return entity

        return Object.keys(entity).reduce((obj: any, attribute: string) => {
            const value: any = entity[attribute]
            return { ...obj, [attribute]: value.toDate?.() ?? value }
        }, {})
    }
}

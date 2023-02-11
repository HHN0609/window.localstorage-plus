export enum Dictionary {
    permanent = "permanent",
    expire = "__expire__"
}

export type Expire = Dictionary.permanent | number

export interface StoredData<T> {
    value: T,
    [Dictionary.expire]: Expire
}

export interface Result<T> {
    value: T | null,
    message: string
}

export interface StorageClass {
    get: <T>(key: string) => Result<T>,
    set: <T>(key: string, value: T, expire: Expire) => void,
    remove: (key: string) => void,
    clear: () => void
}





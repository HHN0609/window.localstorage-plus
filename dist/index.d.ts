import { StorageClass, Expire, Result } from "./type/index";
export default class StoragePlus implements StorageClass {
    set<T>(key: string, value: T, expire?: Expire): void;
    get<T>(key: string): Result<T>;
    remove(key: string): void;
    clear(): void;
}

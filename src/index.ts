import { StorageClass, Dictionary, Expire, StoredData, Result } from "./type/index";

export default class StoragePlus implements StorageClass {
    set<T>(key: string, value: T, expire: Expire = Dictionary.permanent) {
        const data = {
            value,
            [Dictionary.expire]: expire
        }
        localStorage.setItem(key, JSON.stringify(data));
    }

    get<T>(key: string): Result<T> {
        const value = localStorage.getItem(key);
        if(value) {
            const data: StoredData<T> = JSON.parse(value);
            const now = new Date().getTime();
            if(typeof data[Dictionary.expire] === "number" && data[Dictionary.expire] < now){
                this.remove(key);
                return {
                    message: `The ${key} is expired.`,
                    value: null
                }
            } else {
                return {
                    message: "Success.",
                    value: data.value
                }
            }
        } else {
            return {
                message: "Invalid key.",
                value: null
            }
        }
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}
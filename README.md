# Make localStorage support the expire of data

# How to install 
> npm install window.localstorage-plus -S 

# How to use 
~~~ts
import LocalstoragePlus from "window.localstorage-plus";
// LocalstoragePlus is a constructor
let s = new LocalstoragePlus();

// Use 'set' to store a key-value in the window.localStorage. The third parameter 'expire' is optional and its default value is 'permanent" which means the value will be stored permanently. If you don't like that, you can give it a timestamp which means the key-value will be expired after that time.
type Expire = "permanent" | number
LocalstoragePlus.set<T>(key: string, value: T, expire?: Expire): void

// Use 'get' to get the value by the key. And if the value is expired, it won't succeed.
interface Result<T> {
    value: T | null,
    message: string
}
LocalstoragePlus.get<T>(key: string): Result<T>

// Use 'remove' to remove a pair of key-value pairs in the window.localStorage
LocalstoragePlus.remove(key: string): void

// Use 'clear' to remove the all key-value pairs in the window.localStorage 
LocalstoragePlus.clear(): void
~~~
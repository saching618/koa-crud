
class CacheLIFO {
    capacity: number;
    cacheStorage: Map<number, number>;
    LastKey: number;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cacheStorage = new Map<number, number>();
    }

    getItem(key: number) {
        if (this.cacheStorage.has(key)) {
            console.log('getItem', this.cacheStorage);
            return this.cacheStorage.get(key)
        }
        console.log('getItem', -1);
        return -1;
    }

    setItem(key: number, value: number) {
        if (this.cacheStorage.size == this.capacity && !this.cacheStorage.has(key)) {
            this.cacheStorage.delete(this.LastKey);
        }
        this.cacheStorage.set(key, value);
        this.LastKey = key;
        console.log('setItem', this.cacheStorage);
    }

}

class CacheFIFO {
    capacity: number;
    cacheStorage: Map<number, number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cacheStorage = new Map<number, number>();
    }

    getItem(key: number) {
        if (this.cacheStorage.has(key)) {
            console.log('getItem', this.cacheStorage);
            return this.cacheStorage.get(key)
        }
        console.log('getItem', -1);
        return -1;
    }

    setItem(key: number, value: number) {
        if (this.cacheStorage.size == this.capacity && !this.cacheStorage.has(key)) {
            const [firstKey] = this.cacheStorage.keys();
            this.cacheStorage.delete(firstKey);
        }
        this.cacheStorage.set(key, value);
        console.log('setItem', this.cacheStorage);
    }

}

class CacheLRU {
    capacity: number;
    cacheStorage: Map<number, number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cacheStorage = new Map<number, number>();
    }

    getItem(key: number) {
        if (this.cacheStorage.has(key)) {
            let value: number = this.cacheStorage.get(key)!;
            this.cacheStorage.delete(key);
            this.cacheStorage.set(key, value);
            console.log('getItem', this.cacheStorage);
            return value;
        }
        console.log('getItem', -1);
        return -1;
    }

    setItem(key: number, value: number) {
        if (this.cacheStorage.size === this.capacity && !this.cacheStorage.has(key)) {
            const [firstKey] = this.cacheStorage.keys();
            this.cacheStorage.delete(firstKey);
        } else {
            this.cacheStorage.delete(key);
        }
        this.cacheStorage.set(key, value);
        console.log('setItem', this.cacheStorage);
    }
}

export class GetCacheClient {
    typeOfCache: string;
    capacity: number;
    constructor(typeOfCache: string, capacity: number) {
        this.typeOfCache = typeOfCache;
        this.capacity = capacity;
    }

    getCache() {
        switch (this.typeOfCache) {
            case 'LIFO': {
                return new CacheLIFO(this.capacity);
            }
            case 'FIFO': {
                return new CacheFIFO(this.capacity);
            }
            case 'LRU': {
                return new CacheLRU(this.capacity);
            }

        }
    }
}
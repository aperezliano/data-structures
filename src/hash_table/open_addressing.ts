class HashTableOpenAddressing {
  private size: number;
  private buckets: Array<any>;

  constructor(size = 10) {
    this.buckets = [];
    this.size = size;
  }

  add(key: string | number, value: unknown) {
    const hashKey = this.computeHash(key);

    // Hash key not present (no collisions)
    if (this.buckets[hashKey] == undefined) {
      this.buckets[hashKey] = {};
      this.buckets[hashKey][key] = value;
      return;
    }

    // Element present
    if (this.buckets[hashKey].hasOwnProperty(key)) {
      throw "Element already present";
    }

    // Element not present but the slot is taken (Linear probing)
    let newKey = hashKey;
    do {
      newKey = (hashKey + 1) % this.size;
      if (this.buckets[newKey] == undefined) {
        this.buckets[newKey] = {};
        this.buckets[newKey][key] = value;
        return;
      }
    } while (newKey !== hashKey);
  }

  get(key: string | number) {
    const hashKey = this.computeHash(key);

    // Element not present
    if (this.buckets[hashKey] == undefined) {
      return null;
    }

    // Element present in its bucket
    if (this.buckets[hashKey].hasOwnProperty(key)) {
      return this.buckets[hashKey][key];
    }

    // The slot is taken (Linear probing)
    let newKey = hashKey;
    do {
      newKey = (newKey + 1) % this.size;
      if (this.buckets?.[newKey]?.[key] != undefined) {
        return this.buckets[newKey][key];
      }
    } while (newKey !== hashKey);

    return null;
  }

  private computeHash(key: string | number) {
    if (typeof key === "number") {
      key = `${key}`;
    }
    let total = 0;
    for (let i = 0; i < key.length; ++i) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
}

export default HashTableOpenAddressing;

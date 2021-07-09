class HashTableChaining {
  private size: number;
  private buckets: Array<any>;

  constructor(size = 10) {
    this.buckets = [];
    this.size = size;
  }

  add(key: string | number, value: any) {
    const hashKey = this.computeHash(key);

    // Hash key not present (no collisions)
    if (this.buckets[hashKey] == undefined) {
      this.buckets[hashKey] = {};
    }

    // Element already present
    const chain = this.buckets[hashKey];
    if (chain.hasOwnProperty(key)) {
      throw 'Element already present';
    }

    chain[key] = value;
  }

  get(key: string | number) {
    const hashKey = this.computeHash(key);
    const chain = this.buckets[hashKey];

    if (chain == undefined) {
      return null;
    }

    if (chain.hasOwnProperty(key)) {
      return chain[key];
    }

    return null;
  }

  private computeHash(key: string | number) {
    if (typeof key === 'number') {
      key = `${key}`;
    }

    let total = 0;
    for (let i = 0; i < key.length; ++i) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
}

export default HashTableChaining;

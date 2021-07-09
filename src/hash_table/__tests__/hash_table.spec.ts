import HashTableChaining from "../chaining";
import HashTableOpenAddressing from "../open_addressing";

it.each([[HashTableChaining], [HashTableOpenAddressing]])(
  "adds 1 element %p",
  (HashTable) => {
    const hashTable = new HashTable();
    hashTable.add("foo", 1);
    expect(hashTable.get("foo")).toBe(1);
  }
);

it.each([[HashTableChaining], [HashTableOpenAddressing]])(
  "adds 2 different elements %p",
  (HashTable) => {
    const hashTable = new HashTable();
    hashTable.add("foo", 1);
    hashTable.add("baz", 2);
    expect(hashTable.get("foo")).toBe(1);
    expect(hashTable.get("baz")).toBe(2);
  }
);

it.each([[HashTableChaining], [HashTableOpenAddressing]])(
  "returns null for non existing key %p",
  (HashTable) => {
    const hashTable = new HashTable();
    expect(hashTable.get("foo")).toBeNull();
  }
);

it.each([[HashTableChaining], [HashTableOpenAddressing]])(
  "returns null for non existing key with same hash as another %p",
  (HashTable) => {
    const hashTable = new HashTable();
    hashTable.add("foo", 1);
    expect(hashTable.get("oof")).toBeNull();
  }
);

it.each([[HashTableChaining], [HashTableOpenAddressing]])(
  "adds 2 elements with same hash %p",
  (HashTable) => {
    const hashTable = new HashTable();
    hashTable.add("foo", 1);
    hashTable.add("oof", 2);
    expect(hashTable.get("foo")).toBe(1);
    expect(hashTable.get("oof")).toBe(2);
  }
);

it.each([[HashTableChaining], [HashTableOpenAddressing]])(
  "throws error when inserting same element twice %p",
  (HashTable) => {
    const hashTable = new HashTable();
    hashTable.add("foo", 1);
    expect(() => hashTable.add("foo", 2)).toThrow();
  }
);

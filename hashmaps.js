class HashTable {
  constructor(size) {
    this.data = new Array(size);
    console.log(this.data);
  }

  _hash(key) {
    // Generating a unique key for the items
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // Adding the key-value pair to the hashtable
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    // Method to get the item value based on the key provided
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }

  values() {
    // Method to get all the values in the table
    const values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        values.push(this.data[i][0][1]);
      }
    }
    return values;
  }
}

// const myHashTable = new HashTable(50); --> Setting the size of the hashmap
// Here 50 is the size of array;
// myHashTable.set("grapes", 20);
// myHashTable.set("apple", 30);
// myHashTable.set("beans", 3);
// myHashTable.set("corns", 50);
// console.log(myHashTable.get("apple"));
// console.log(myHashTable.keys());
// console.log(myHashTable.values());

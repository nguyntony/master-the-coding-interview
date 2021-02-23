class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    // what does this _ mean? in JS the underscore means that this is a private property, you can still access it but it's an industry standard to tell other developers that they should not be accessing it. 
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    // this for loop will generate a numerical id for the key that we give. and we perform some sort of math to ensure that it will generate an id that is between 0 and 50
    return hash;
  }

  set(key, value) {
    let address = this._hash(key)
    if(!this.data[address]) {
      this.data[address] = []
    } 
    this.data[address].push([key, value])
    // this is our way of handling collision, there are instances where the data could collide and override but here, we are handling that by just adding the new key value pair to the end of the array at that memory space. so there could be two items in one bucket
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let b of currentBucket) {
        if (b[0] === key) {
          console.log(b[1])
          return b[1]
        }
      }
    }

    return undefined
  }

  showHash() {
    console.log(this.data)
  }

  keys() {
    // this will allow us to iterate over all the keys in our hash
    const allKeys = []
    for (let d of this.data) {
      if (d) {
        allKeys.push(d[0][0])
      }
    }
    return allKeys
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.set('oranges', 19)

console.log(myHashTable.keys())

# Hash Tables
Hash tables are another name for Objects in JS. You can store anything in objects. Hashes are good for when you know what you want to lookup, you are able to do so relatively quickly. 

## 💡 How do hashes work?
The language that you are coding in, will take they key that you created for the hash and it will hash that key which basically means that it will create some sort of id that will be stored in the pc. `basket.grapes`, the term ‘grapes’ may not be exactly what is stored but a hash that is equivalent to grapes will be stored. Some hashes may take a very long time depending on which system is being used. 

## 💡 Time 
1. Insert is constant
2. Lookup is constant
3. Delete is constant
4. Search is constant

With hashes the values are assigned to a key and it does not need to be sorted so if you delete something, it does not need to shift. Unlike arrays where things are ordered meaning the index, hashes / objects have keys. The values are stored in different addresses. 

## 💡 Cons
Hashes are given a set amount of space, so when you store values into the object, the hash function will randomly assign an id and will store it somewhere. Values may be stored in the same area, this is known as hash collision

Hash collision: there is a possibility that you can keep adding information into the same memory space, if there is a collision is will slow down the operations above to O(n/k) where k is the size of your hash but if you simply this it is just O(n). 

How to deal with collisions? 
1. Separate chaining
2. Open addressing 

When we talk about the hash operations, there may be scenarios where it is linear time. 

## 💡 Keys
With objects you are only able to save the string datatype as the key, there are scenarios where the key could be a function (?)
- Map: `const a = new Map()` this is the way to create a Map and it will allow for any data type to be used as a key. It also maintains insertion order, with an object there is no order, the data is inserted randomly. 
- Sets: `const b = new Sets()` this is also an object but it only saves the keys. 

When you want to iterate through the hash and return all the keys, the size that is allocated to the object could be large, could be not, but to grab all the keys you would loop through the object and capture the keys. This is a downside of hash because it is unordered it will be difficult to grab them all unlike arrays, where everything is close to one another.

#### Keywords
- idempotent: given the same input, you will always receive the same output.












let obj = {};
const map = new WeakMap();
map.set(obj, {key: "some_val"});
console.log(map.get(obj));
obj = undefined; // now obj and the associated data in the map will be cleaned up in the next gc(garbage collection) cycle




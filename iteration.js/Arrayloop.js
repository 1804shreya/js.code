const a=[1,2,3,4,5,6]
for (const i of a) {
    console.log(i);
    
}
const n="Hello"
for (const i of n) {
    console.log(`hii bye ${i}`);
}
//maps
const map = new Map();
map.set('IN',"India");
map.set("Pak","Pakishtan")
map.set("fr","France")
map.set('IN',"India");
//.console.log(map);
for(const [key, value] of map){
    console.log(key,":=", value)
}


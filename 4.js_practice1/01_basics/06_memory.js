// Stack(primitive) by value
let a="hello"
let b=a // given a copy of a
b="world"// change in copy
console.log(a)//hello
console.log(b)//world

// heap(non-primitive) by ref
let one={
    name:"abc"
}
let two=one // given reference
two.name="efg"
console.log(one.name) //efg
console.log(two.name) //efg

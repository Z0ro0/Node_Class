const user = {};
user.name = 'kyeongrok';
user.age = 31;

console.log(user);

const user2 = {
    name:'kyeongrok',
    age: 31
};//해당하는 값에 원래는 ""를 붙여주어야 하지만 코딩 편의상 붙혀주지 않아도 됨

console.log(user2);

const user3 = {
    name: 'kim',
    age: 30
};
console.log(user3);
console.log(user3.name);
console.log(user3.age);

user3.job = 'developer';
user3.nation = 'korea';
console.log(user3);

const fieldName = 'age';
console.log(user3[fieldName]);
const u1 = {name : "1111a"};
const u2 = {name : "2222b"};
const u3 = {name : "3333c"};
const u4 = {name : "4444d"};

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

for(let u of userRoles.keys()){
    console.log(u.name);
}
for(let u of userRoles.values()){
    console.log(u);
}
for(let u of userRoles.entries()){
    console.log(u);
}
for(let [key, value] of userRoles){
    console.log(key.name, value);
}

console.log([...userRoles.values()]); // ['User', 'User', 'Admin']
userRoles.clear();


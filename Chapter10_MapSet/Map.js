const u1 = {name : "1111a"};
const u2 = {name : "2222b"};
const u3 = {name : "3333c"};
const u4 = {name : "4444d"};

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

userRoles.has(u2); // Truer"
userRoles.get(u2); // "User"
userRoles.set(u2, 'Admin');
userRoles.get(u2); // "Admin"

userRoles.get(u4); // Undefined
userRoles.has(u4); // False

userRoles.size;    // 3
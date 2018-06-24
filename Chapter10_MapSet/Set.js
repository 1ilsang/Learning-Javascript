const roles = new Set();

roles.add('1ilsang');
roles.add('sangchul');

roles.size; // 2

roles.add('1ilsang');
roles.size; // 2. 중복이라면 아무일도 일어나지 않는다.

roles.delete('sangchul');
roles;      // Set ["1ilsang"]
roles.size; // 1
roles.delete('sangchul'); // False

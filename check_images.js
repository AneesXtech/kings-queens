const fs = require('fs');
const paths = [
  'asset/Kings Products/Gold.png',
  'asset/Kings Products/Silver.png',
  'asset/Kings Products/Bronze.png',
  'asset/Queen Products/Sapphire.png',
  'asset/Queen Products/Emerald (1).png',
  'asset/Queen Products/ruby-perfume (1).png'
];

paths.forEach(p => {
  console.log(p, 'exists:', fs.existsSync(p));
});

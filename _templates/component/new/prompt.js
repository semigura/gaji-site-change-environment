const fs = require('fs');
const path = require('path');

const dirs = root => {
  const list = fs
    .readdirSync(root)
    .filter(f => fs.statSync(path.join(root, f)).isDirectory());
  list.forEach(p => {
    const parent = path.join(root, p);
    const children = fs
      .readdirSync(parent)
      .filter(
        f =>
          fs.statSync(path.join(parent, f)).isDirectory(),
      );
    children.forEach(c => list.push(path.join(p, c)));
  });
  return list.sort();
};
const currentPath = process.cwd();

const CREATE_NEW_SUBDIRECTORY_MESSAGE = '* Create new subdirectory';

module.exports = [
  {
    type: 'list',
    name: 'sub',
    message: 'What subdirectory do you need?',
    choices: () => [
      ...dirs(`${currentPath}/src/components`),
      CREATE_NEW_SUBDIRECTORY_MESSAGE,
    ],
  },
  {
    type: 'input',
    name: 'sub',
    message: 'What is the name of new subdirectory?',
    when(answers) {
      return answers.sub === CREATE_NEW_SUBDIRECTORY_MESSAGE;
    },
  },
];

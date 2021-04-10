// Importing Modules
const ig = require("./instagram");
require('dotenv').config();

const username = process.env.INSTA_USER;
const password = process.env.INSTA_PWD;
const tags = ["#stadiums"];

(async () => {
    await ig.initialize();
    await ig.login(username, password);
    await ig.likeTagsProcess(tags);
    await ig.close();
})();
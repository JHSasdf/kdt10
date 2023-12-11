// 전체 모델에 대한 정의
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

console.log('config > ', config);


const db = {};
// 시퀄라이즈 객체 선언 시에 매개변수로 다음 정보들을 받음.
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user')(sequelize, Sequelize); // 첫번째 인자: 인스턴스, 두번째 인자: 객체 청사진(class)
// models/Visitor.js에서 정의한 모델이 db.Visitor 에 들어감
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: ~~~}

module.exports = db;
// db라는 변수는 내보냄
// 시퀄라이즈 객체를 만들고 모듈로서 내보내서 "다른 파일에서 모두 같은 객체를 사용할 수 있게 하는 것"
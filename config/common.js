const { execSync } = require("child_process");

const execStr = (str) => {
  try {
    return execSync(str).toString().trim();
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description 错误打印
 * @param {*} arrError 错误数组
 */
const errorLog = (arrError) => {
  console.log(
    "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨"
  );
  console.log(`🚨 `);
  arrError.forEach((err) => console.log(`🚨 ` + err));
  console.log(`🚨 `);
  console.log(
    "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨"
  );
};

module.exports = {
  execStr,
  errorLog,
};

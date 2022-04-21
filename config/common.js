const { execSync, exec } = require("child_process");

const execStr = (str) => {
  try {
    return execSync(str).toString().trim();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const execAsync = (str) => {
  try {
    exec(str, function (err, value) {
      console.log(err);
      console.log(value);
    });
    // return execSync(str).toString().trim();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

/**
 * @description 错误
 * @param {*} arrError 数组
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

/**
 * @description 成功
 * @param {*} arrError 数组
 */
const logSuccess = (arrSucc = []) => {
  console.log(
    "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉"
  );
  console.log(`🎉 `);
  arrSucc.forEach((succ) => console.log(`🎉 ` + succ));
  console.log(`🎉 `);
  console.log(
    "🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉"
  );
};

module.exports = {
  execStr,
  errorLog,
  logSuccess,
  execAsync,
};

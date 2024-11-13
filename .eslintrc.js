module.exports = {
  rules: {
    // 최대 줄 길이를 제한하여 상수를 한 줄에 작성하도록 유도
    "max-len": ["error", { code: 80, ignoreUrls: true }],
    // 객체나 배열을 한 줄로 유지하도록 강제
    "array-element-newline": ["error", "consistent"],
    "object-curly-newline": ["error", { multiline: true, consistent: true }],
  },
};

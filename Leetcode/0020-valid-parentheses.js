
/*
思路：括号匹配非常符合栈的特点：先进后出，后进先出（LIFO）
所以这里就用数组，然后配合 push 和 pop 函数即可实现

循环，然后判断 s[i] 是不是在 P 里面的，如果不在的话说明是右括号（括回去的）
再 pop 出栈判断出去的是不是 s[i]，如果不是直接返回 false

如果 s[i] 能直接用 P 读到右括号的值，那么就直接把这个右括号的值入栈即可
*/

/**
 * @link https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const P = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let stack = [];
  for (let i = 0;i < s.length;i++) {
    if (P[s[i]] === undefined) {
      if (stack.pop() !== s[i]) return false;
    } else {
      stack.push(P[s[i]]);
    }
  }
  return stack.length === 0;
};

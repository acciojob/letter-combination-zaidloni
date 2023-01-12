
mappings = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function buildCombi(s) {
  const ans = s
    .split("")
    .map(function (v) {
      return mappings[v] || [""];
    })
    .reduce(function (a, b) {
      var combi = [];
      for (var i = 0; i < a.length; i++)
        for (var j = 0; j < b.length; j++) combi.push(a[i] + b[j]);
      return combi;
    });
  return ans;
}

module.exports = letterCombinations;


function me_has_pasao(x) {
  console.log(`Me has pasao ${x}, que es de tipo "${typeof x}"`);
  if (typeof x === "function") {
    console.log(x(2, 3));
  }
}

me_has_pasao(5)
me_has_pasao({ a: 1 });
me_has_pasao(function (a, b) { return a + b; });

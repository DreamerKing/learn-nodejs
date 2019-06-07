function distinctFilterSortArray(oringin) {
  return Array.from(new Set(oringin)).filter(item => item>0).sort((n, m) => n - m );
}

console.log(distinctFilterSortArray([1, 9, -4, 5, 11, 7,21, 2, 3, -9, 6,5]));

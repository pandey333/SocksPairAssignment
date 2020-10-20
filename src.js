function socks(arr) {
    let map = new Map(),
        pairs = 0;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
        else map.set(arr[i], 1);
      }
    for (let sock of map.values()) {
        pairs += Math.floor(sock / 2);
      }
    return pairs;
    }

console.log(
socks([10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40])
);

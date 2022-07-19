var defineProperty = Reflect.defineProperty;
function fibonaci(fibonaci) {
    var a = 0;
    var b = 1;
    var next = 0;
    for (var i = 0; i <= fibonaci; i++) {
        if (i <= 1) {
            next = i;
        }
        else {
            next = a + b;
            a = b;
            b = next;
        }
    }
    return next;
}
function sum(sumFibonaci) {
    var sum = 0;
    // @ts-ignore
    for (var i = 0; i < sumFibonaci; i++) {
        sum += fibonaci(i);
    }
    return sum;
}
var stt = prompt("Nhập số lượng số Fibonaci cần tính tổng: ");
console.log("Tổng các số fibonaci là: " + sum(stt));

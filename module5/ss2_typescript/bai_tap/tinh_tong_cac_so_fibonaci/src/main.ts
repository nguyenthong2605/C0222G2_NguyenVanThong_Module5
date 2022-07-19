import defineProperty = Reflect.defineProperty;

function fibonaci(fibonaci: number): number {
    var a = 0;
    var b = 1;
    var next = 0;
    for (let i = 0; i <= fibonaci; i++) {
        if (i <= 1) {
            next = i;
        } else {
            next = a + b;
            a = b
            b = next
        }
    }
    return next;
}
function Sum(sumFibonaci: number): number {
    var sum = 0;
    for (let i=0; i<sumFibonaci; i++){
        sum +=fibonaci(i);
    }
    return sum;
}
var stt: number = prompt("Nhập số lượng số Fibonaci cần tính tổng: ");
console.log("Tổng các số fibonaci là: " + Sum(stt));
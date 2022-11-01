// Mostrar en consola la secuencia de Fibonacci: Entre los números 0 y 1000.

let a = 0, b = 1, c = 1, limit = 1000;
while (c <= limit) {
    console.log(c);
    c = a + b;
    a = b;
    b = c;
    }

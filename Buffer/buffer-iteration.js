const buf = Buffer.of(1, 2, 3);
console.log(buf);
for (const b of buf) {
    console.log(b);
}

for (const b of buf.entries()) {
    console.log(b);
}


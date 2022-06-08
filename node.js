console.log(process.argv);
setTimeout(() => {
    process.send({ m: 'message', xianfei: true });
    // process.exit(10)
}, 10000);

undefined.name = 100;
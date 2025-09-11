const argsCount = parseInt(process.argv[2]);

if (isNaN(argsCount)) {
  console.log('Missing size');
} else {
    for (let i = 0; i < argsCount; i++) {
        console.log("X".repeat(argsCount));
    }
}
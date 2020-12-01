const spinner = () => {
  let time = 100;
  const spinner = ['|', '/', '-', '\\', '|'];
  for (let item of spinner) {
    setTimeout(() => {
      process.stdout.write(`\r${item}`);
    }, time);
    time += 200;
  }
}

spinner();
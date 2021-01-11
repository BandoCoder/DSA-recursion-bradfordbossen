function sleepSheep(input) {
  if (input <= 0) {
    console.log("All sheep jumped over the fence");
    return;
  }
  console.log(input + ": Another sheep jumps over the fence");
  return sleepSheep(input - 1);
}

sleepSheep(3);

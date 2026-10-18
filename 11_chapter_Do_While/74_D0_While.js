let retry = 0;
do {
    console.log("Executing the code");
    console.log("Retrying.....",retry);
   retry++; // IF it is infinite 
} while (retry < 3);


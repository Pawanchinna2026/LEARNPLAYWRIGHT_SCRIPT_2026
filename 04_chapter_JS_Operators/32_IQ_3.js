let responseTime = 500;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(`Response: ${responseTime} ms - ${slaStatus}`);

// template Literal
console.log(`What is the SLA time ? - ${sla}`);
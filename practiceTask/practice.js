let userRole = "Employee";
let userMessage;

switch (userRole) {
    case "Employee":
        userMessage = "Dietary Services";
        break;
    case "Member":
        userMessage = "Dietary Services and One on one with a Dietitian";
        break;
    default:
        userMessage = "No access granted";
        break;
}

console.log(typeof userMessage);
console.log("User Message:", userMessage);
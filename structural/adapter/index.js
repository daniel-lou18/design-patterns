const localStorage = require("./LocalStorage");

const userId = localStorage.getItem("userId");

console.log({ userId });

if (!userId) {
  console.log("Setting user ID...");
  localStorage.setItem("userId", "123456789");
  localStorage.setItem("token", "qsmlkdfj555qsdf");
} else {
  console.log(
    "User ID found: ",
    localStorage.getItem("userId"),
    "with token: ",
    localStorage.getItem("token")
  );
  console.log("Clearing localStorage...");
  localStorage.clear();
}

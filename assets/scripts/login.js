loginButton.addEventListener("click", async () => {
  const data = new FormData();

  data.append("username", username.value);
  data.append("password", password.value);

  const response = await axios(
    "http://localhost/expense-tracker/assets/server/login.php",

    {
      method: "POST",
      data: data,
    }
  );

  if(response.data.status === "Login Successful"){
    window.location.href = "/tracker.html";
  }
});

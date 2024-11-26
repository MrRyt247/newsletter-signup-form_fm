$(document).ready(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset input to default
  $(document).on("click change", () => {
    $("#email-log").text("");
    $("#email")
      .css("borderColor", "var(--gray)")
      .css("color", "var(--darkSlateGrey)")
      .css("backgroundColor", "var(--white)");
  });

  $("#form").on("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    // Format input when invalid
    if (!emailRegex.test(data.email)) {
      $("#email-log").text("Valid email required");
      $("#email")
        .css("borderColor", "var(--tomato)")
        .css("color", "var(--tomato)")
        .css("backgroundColor", "hsla(4, 100%, 67%, 0.15)");
      return;
    }

    $(".wrapper").css("display", "none");
    $(".success-message strong").text(data.email);
    $(".success-message").css("display", "flex");
  });

  $(".success-message button").on("click", () => {
    $(".wrapper").css("display", "flex");
    $(".success-message").css("display", "none");
  });
});

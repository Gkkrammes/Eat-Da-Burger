$(function() {
   $(".add-burger").on("submit", function(event) {
        var burgerName = $("#burger_name").val().trim();
        if (!burgerName) {
            alert("Must enter a burger name!");
            return;
        }
        
        event.preventDefault();
        var newBurger = {
            burger_name: burgerName,
        };
        
        $.ajax("/api/burger/insertOne", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Ordered burger");
            location.reload();
        });
    });
    
    $(".change-devoured").on("click", function(event) {
        var newDevoured = {
            id: $(this).data("id")
        };
        
        $.ajax("/api/burger/updateAsDevoured", {
            type: "PUT",
            data: newDevoured
        }).then(function() {
            console.log("changed devoured flag to YES");
            location.reload();
        });
    });
});
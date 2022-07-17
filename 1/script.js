function createDiv(){
    $(document).ready(function () {
        var test = {
            id: "div",
            class: "divclass",
            css: {
                color: "Red"
            }
        };
        var $div = $("<div>", test);
        $div.html("New div tag is created.");
        $("body").append($div);
    });
}
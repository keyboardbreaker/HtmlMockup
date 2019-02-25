$(".form2").hide();
$(".next").click(function(){
    $(".form1").hide();
    $(".form2").show();
    $(".next").css('background-color',"#717171");
    $(".back").css('background-color',"#AAAAAA");
});
$(".back").click(function(){
    $(".form1").show();
    $(".form2").hide();
    $(".back").css('background-color',"#717171");
    $(".next").css('background-color',"#AAAAAA");
});

$(".sbmt").click(function(){
    $("#idForm").submit(function(e) {
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes the form's elements.
            success: function(data) {
                alert(data); // show response from the php script.
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
});
// JavaScript Document
$(document).ready(function() {

    "use strict";

    $(".request-form").submit(function(e) {
        e.preventDefault();        
        var name = $(".name");
        var email = $(".email");
        var phone = $(".phone");
        var address = $(".address");
        var city = $(".city");
        var state = $(".state");
        var code = $(".code");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } if (phone.val() == "") {
            phone.closest(".form-control").addClass("error");
            phone.focus();
            flag = false;
            return false;
        } else {
            phone.closest(".form-control").removeClass("error").addClass("success");
        } if (address.val() == "") {
            address.closest(".form-control").addClass("error");
            address.focus();
            flag = false;
            return false;
        } else {
            address.closest(".form-control").removeClass("error").addClass("success");
        } if (city.val() == "") {
            city.closest(".form-control").addClass("error");
            city.focus();
            flag = false;
            return false;
        } else {
            city.closest(".form-control").removeClass("error").addClass("success");
          
        }if (state.val() == "") {
            state.closest(".form-control").addClass("error");
            state.focus();
            flag = false;
            return false;
        } else {
            state.closest(".form-control").removeClass("error").addClass("success");
          
        }if (code.val() == "") {
            code.closest(".form-control").addClass("error");
            code.focus();
            flag = false;
            return false;
        } else {
            code.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&phone=" + phone.val() + "&address=" + address.val() + "&city=" + city.val() + "&state=" + state.val() + "&code=" +code.val();
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "php/contactForm.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
                    if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
                        $('.loading').fadeIn('slow').html('<font color="#00596e">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
                         else
                         $('.request-form').trigger('reset');
                        $('.loading').fadeIn('slow').html('<font color="#00596e">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
                                }
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
    
})




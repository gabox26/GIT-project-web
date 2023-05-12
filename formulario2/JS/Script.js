$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        age: {
          required: true,
          number: true,
          min: 18
        },
        email: {
          required: true,
          email: true
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#age").val() > 50
            }
          },
          number: true,
          min: 0
        }
      },
      messages : {
        name: {
          minlength: "Name should be at least 3 characters"
        },
        age: {
          required: "Porfavor, ingrese su edad",
          number: "ingrese su edad porfavor",
          min: "debe tener al menos 18 anos"
        },
        email: {
          email: "su correo debe tener el siguiente formato: abc@domain.tld"
        },

      }
    });
  });
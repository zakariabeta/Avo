$().ready(function () {
    $("#contactForm").validate({
        rules: {
            "nom": {
                required: true,
                minlength: 2
            },
            "email": {
                required: true,
                email: true,
                minlength: 2
            },
            "message": {
                required: true
            },
        },
        messages: {
            "nom": {
                required: "Votre nom est requis.",
                minlength: "Votre nom est requis.",
            },
            "email": {
                required: "Votre email est requis.",
                email: "Merci de saisir une adresse email valide.",
            },
            "message": {
                required: "Votre message est requis.",
            },
        }
    });
});

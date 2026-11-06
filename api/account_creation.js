function check_email(first_name, last_name, email) {
    // Checks if email is in the correct format, should also access the list of real devinci accounts to check if the person exists
    // Should also check if the email is already in the platform database
    if (email == first_name + "." + last_name + "@edu.devinci.fr") {
        console.log("Email is valid");
        return true;
    } else {
        console.log("L'email n'est pas valide. Veuillez entrer un email au format edu.devinci.fr");
        return false;
    }
}

let verif = false;
while (!verif) {
    let first_name = prompt("Quel est votre prénom?");
    console.log(first_name);
    let last_name = prompt("Quel est votre nom de famille?");
    console.log(last_name);
    let email = prompt("Quel est votre adresse email?");
    console.log(email);
    verif = check_email(first_name, last_name, email);
}
verif = false;
while (!verif) {
    let password = prompt("Quel est votre mot de passe?");
    console.log(password);
    if (password.length >= 6) {
        console.log("Mot de passe valide");
        verif = true;
    } else {
        console.log("Mot de passe invalide. Veuillez entrer un mot de passe d'au moins 6 caractères.");
    }
}
console.log("Compte créé avec succès !");
// Should add data to database

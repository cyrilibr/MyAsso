// const associations = get_associations_from_database(student_id);
let update_asso = associations.copy();
if (associations.length > 1) {
    ranks =[];
    for (i = 0; i < associations.length; i++) {
        for (j = 0; j < update_asso.length; j++) {
            console.log("Tapez " + (j+1) + " pour " + update_asso[j]);
        }
        let answer = Number(console.prompt("Quelle est l'association que vous préférez parmi celles-ci : "));
        ranks.push(update_asso[answer - 1]);
        update_asso.remove(update_asso[answer - 1]);
    }
    return ranks;
}
// Update database with ranks

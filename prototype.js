
  class railwayReservation {
    constructor(givenName) {
        this.name = givenName;
    }
    formSumit() {
        alert("Form Submitted Successfully" + this.name);
    }
    cancelForm() {
        alert("Form Cancelled" + this.name);
    }
    // fillForm(givenName) {
    //     this.name = givenName;
    // }
}
let Gorakh = new railwayReservation("Gorakh Kharat");
// Gorakh.fillForm("Gorakh Kharat");
Gorakh.formSumit();
Gorakh.cancelForm();
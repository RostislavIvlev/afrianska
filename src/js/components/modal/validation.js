class Validation {
    constructor() {
        this.submitBtn = document.getElementById("submit");
        this.form = document.getElementById("form");
        this.nameData;
        this.emailData;
        this.messageData;
        this.isEmpty;
        this.isValid;
        this.init();
    }

    init() {
        this.events();
    }

    events() {
        this.submitBtn.addEventListener("click", function(e) {
            e.preventDefault();
            this.checkData();

            this.isValid === true ? this.sendData() : "";
        }.bind(this))
    }

    checkData() {
        this.nameData = document.getElementById("name").value;
        this.emailData = document.getElementById("email").value;
        this.messageData = document.getElementById("message").value;

        if (this.nameData !== "") {
            document.querySelector("#errorName").classList.add("modal-form__error_hidden")
        }

        if (this.emailData !== "") {
            document.querySelector("#errorEmail").classList.add("modal-form__error_hidden")
        }

        if (this.messageData.trim() !== "") {
            document.querySelector("#errorMessage").classList.add("modal-form__error_hidden")
        }

        if (
            this.nameData !== "" &&
            this.emailData !== "" &&
            this.messageData.trim() !== ""
        ) {
            this.isValid = true;
        } else {
            this.isValid = false
        }
    }

    sendData() {
        this.form.action = "/some-url";
        document.querySelector(".modal__form-sent").classList.add("modal__form-sent_visible");
        setTimeout(function() {
            document.querySelector(".modal__form-sent").classList.remove("modal__form-sent_visible");
        }, 2000)
    }
}

let validation = new Validation();
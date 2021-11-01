class Modal {
    constructor(props) {
        let defaultConfig = {
            linkAttribute: "data-modal",
        }

        this.config = Object.assign(defaultConfig, props)
        this.modalElem = document.getElementById("modal");
        this.init()
    }

    init() {
        this.scrollPosition;
        this.events();
    }
    

    events() {
        document.addEventListener("click", function(e) {
            const target = e.target.closest("[" + this.config.linkAttribute + "]")

            if (target) {
                e.preventDefault();
                this.openModal();
                return;
            }

            if (e.target.classList.contains("modal__close") || e.target.classList.contains("modal-wrapper")) {
                this.closeModal();
            }
        }.bind(this))
    }

    openModal() {
        this.scrollPosition = window.pageYOffset;
        console.log(this.scrollPosition);
        document.body.style.position = 'fixed';
        document.body.style.top = -this.scrollPosition + "px";
        document.body.classList.add("modal-opened")
        this.modalElem.classList.add("modal-wrapper_visible");
    }

    closeModal() {
        document.body.style.position = '';
        this.modalElem.classList.remove("modal-wrapper_visible");
        window.scrollTo(0, this.scrollPosition);
    }
} 

let modal = new Modal();
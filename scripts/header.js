import { overlay_config } from "./main.js";

export function toggleHeader(type) {

    const btn_navbar_open = document.getElementById("btn-navbar-open");
    const btn_navbar_close = document.getElementById("btn-navbar-close");
    const header = document.getElementById("header");
    const navbar = document.getElementById("navbar");
    const ov_header = document.getElementById("ov-header");

    function hOpen() {
        header.setAttribute("aria-expanded", "true");
        navbar.removeAttribute("inert", "");
        ov_header.classList.add("show");
        // ### overlay_config(ov_header, "open")
    }
    function hClose() {
        header.setAttribute("aria-expanded", "false");
        navbar.setAttribute("inert", "true");
        ov_header.classList.remove("show");
        // ### overlay_config(ov_header, "close")
    }

    if (type === "initial") {
        console.log(`LOG: *func: Toggle Header`);
        // Event's on click
        btn_navbar_open.addEventListener("click", () => { toggleHeader("open") });
        btn_navbar_close.addEventListener("click", () => { toggleHeader("close") });
        // ### ov_header.addEventListener("click", () => { overlay_config(ov_header, "close") });
        // Initial Close
        hClose()
        return
    }

    if (type === "close") {
        hClose();
        return
    } else if (type === "open") {
        hOpen();
        return
    }

}
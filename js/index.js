window.onload = function () {
    /*Code for creating a sticky header that stays on screen as user scrolls */
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myheader");

    var sticky = header.offsetTop;
    console.log(sticky);
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


};

/*code for displaying projects tabs */
function openProject(evt, project) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(project).style.display = "block";

}
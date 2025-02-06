document.addEventListener("DOMContentLoaded", function () {
    const footnotes = document.querySelectorAll("a[footnote]");
    
    footnotes.forEach(footnote => {
        footnote.addEventListener("click", function (event) {
            event.preventDefault();
            const footnoteId = this.getAttribute("footnote");
            const footnoteElement = document.getElementById(footnoteId);
            
            if (footnoteElement) {
                footnoteElement.scrollIntoView({ behavior: "smooth" });
                footnoteElement.style.backgroundColor = "yellow";
                
                setTimeout(() => {
                    footnoteElement.style.backgroundColor = "";
                }, 2000);
            }
        });
    });
});


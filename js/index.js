document.addEventListener("DOMContentLoaded", function() {
    const lazySections = document.querySelectorAll('[data-lazy]');

    // Intersection Observer options - increased rootMargin for earlier loading
    const observerOptions = {
        root: null,
        rootMargin: "50px", // Start loading 50px before the section enters viewport
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Intersection Observer callback
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is in the viewport, remove the data-lazy attribute
                const section = entry.target;
                section.removeAttribute('data-lazy');
                
                // Optionally, you can add some class to trigger animations
                section.classList.add('loaded');

                // Stop observing the current section
                observer.unobserve(section);
            }
        });
    }, observerOptions);

    // Observe each lazy-loaded section
    lazySections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Performance monitoring (optional - can be removed in production)
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;
                
                console.log('%c⚡ Performance Metrics:', 'color: #4CAF50; font-weight: bold; font-size: 14px;');
                console.log('%cPage Load Time: ' + (pageLoadTime / 1000).toFixed(2) + 's', 'color: #2196F3;');
                console.log('%cConnect Time: ' + (connectTime / 1000).toFixed(2) + 's', 'color: #2196F3;');
                console.log('%cRender Time: ' + (renderTime / 1000).toFixed(2) + 's', 'color: #2196F3;');
            }, 0);
        });
    }
});

// function isIphoneOrFallback() {
//     // Check if the device is iPhone 8 or older
//     const ua = navigator.userAgent;
//     if (/iPhone/.test(ua) && !window.CSS.supports('(-webkit-overflow-scrolling: touch)')) {
//       return true; // iPhone 8 or older
//     }
//     return false;
// }
// // Initialize based on device
// console.log(isIphoneOrFallback())
// if (isIphoneOrFallback()) {
//     document.querySelector('#Collected_waste .slider-container').style.display = 'none';
//     document.querySelector('#Collected_waste .Slider').style.display = 'block';
//     document.querySelector("#Collected_waste").classList.remove("Slider3D")
// }

function changeLange(event){
    console.log("Clicked")
    if (localStorage.getItem("lang") === "en"){
        localStorage.setItem("lang","ar")
    }else{
        localStorage.setItem("lang","en")
    }
    window.location.reload()
}

// Function to load the content dynamically
function loadContent() {
    // Get the language from localStorage
    const lang = localStorage.getItem('lang') || 'ar'; // Default to 'ar' if no language is set

    // Define the file path based on the language
    var elements;
    var sectionsDirection = document.querySelectorAll(".language_directed_section")
    var direction;
    if (lang === 'ar'){
        elements = document.querySelectorAll(".EN")
        direction = 'rtl'
    }else{
        elements = document.querySelectorAll(".AR")
        direction = 'ltr'
    }
    for (var element of elements){
        element.style.display = "none"
    }
    for (var section of sectionsDirection){
        section.style.direction = direction
    }


    document.getElementById("content").style.display = 'block'
    try{
        document.querySelector("#portfolio .active").click()

    }catch{}


    const hash = window.location.hash.substring(1); // Get the fragment without the '#'
    if (hash) {
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// Call the function to load content when the page loads
window.onload = loadContent;

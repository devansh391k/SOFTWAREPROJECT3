// script.js

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.dataset.section;
        document.querySelectorAll('.product-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    });
});

const modal = document.getElementById("signin-modal");
const btn = document.getElementById("signin-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("signin-form").addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email, "Password:", password);
    modal.style.display="none";
});
//Add the product items to the sections.
const productData = {
    "women": [
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/1de3c103_7adf",title:"The Clean Silk Shirt",price:"$98"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/3293791d_086f/womens-linen-notch-ss-shirt-classic-red",title:"The Notch Shirt in Linen",price:"$78"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/35e24bfb_ba81/womens-everywhere-pant-stretch-linen-black",title:"The Everywhere Pant in Stretch Linen",price:"$58"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/4246d343_6836",title:"The Perform Legging",price:"$58"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/d54bc906_7e34",title:"The Form Bag",price:"$148"},

    ],
    "men": [
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/6c5dfc1a_3c7e",title:"The Cashmere Crew",price:"$120"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/aa45d8c2_e86e",title:"The Track Pant",price:"$68"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/8442b35c_ea19/mens-essential-organic-crew-uniform-kalamata",title:"The Essential Organic Crew",price:"$35"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/316f961c_9ab4",title:"The Modern Loafer",price:"$168"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/c4b36722_34f9/mens-denim-utility-jacket-dyed-navy",title:"The Denim Utility Jacket",price:"$68"},
    ],
    "shoes": [
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/316f961c_9ab4",title:"The Modern Loafer",price:"$168"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/ad5e464b_b44e/mens-court-sneaker-white-green-parchment",title:"The Court Sneaker",price:"$148"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/eb4710b8_e976/mens-tread-bare-sneaker2-canvas-black",title:"The Tread-Bare Sneaker",price:"$58"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/4e532ea8_e23d/mens-tread-bare-sneaker2-canvas-sapphire-argan",title:"The tuck sneaker",price:"$98"},
        {src:"https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto:best:sensitive,dpr_2.0,f_auto/i/120b96b5_625a/mens-court-sneaker-canvas-blue-trench",title:"The Way shoes",price:"$78"},
    ],
    "accessories": [
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/8ed6596f_7d65",title:"The ReNew Fleece Sweatshirt",price:"$58"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/6c5dfc1a_3c7e",title:"The Cashmere Crew",price:"$120"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/aa45d8c2_e86e",title:"The Track Pant",price:"$68"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/d54bc906_7e34",title:"The Form Bag",price:"$148"},
        {src:"https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/8de5689f_44c8",title:"The Pima Tee",price:"$35"},
    ]
}
for (let section in productData) {
    let sectionElement = document.getElementById(section).querySelector(".products");
    productData[section].forEach(product => {
        sectionElement.innerHTML+=`<div class="product">
                                        <img src="${product.src}" alt="${product.title}">
                                        <h3>${product.title}</h3>
                                        <p>${product.price}</p>
                                    </div>`
    })
}

gapi.signin2.render('g-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSignIn,
    'onfailure': onFailure
});

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);

    // Send the ID token to your backend for verification
    fetch('/verify-google-token', { // Replace with your backend endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: id_token })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Google Sign-In successful');
            modal.style.display="none";
            // Handle successful sign-in (e.g., redirect, update UI)
        } else {
            console.error('Google Sign-In failed:', data.error);
            // Handle sign-in failure
        }
    })
    .catch(error => {
        console.error('Error verifying Google token:', error);
        // Handle network or other errors
    });
}

function onFailure(error) {
    console.error('Google Sign-In error:', error);
}
// JavaScript code for the restaurant website

// Example function to display a welcome message
//function displayWelcomeMessage() {
//    var welcomeMessage = "Welcome to our restaurant website!";
//    alert(welcomeMessage);
//  }
  
//  // Example event listener to trigger the welcome message on button click
//  var button = document.getElementById("welcomeButton");
//  button.addEventListener("click", displayWelcomeMessage);
 
 
//  // menu page

//// Example function to handle menu item click
//function handleMenuItemClick(event) {
//    var menuItem = event.currentTarget;
//    console.log('Clicked on menu item: ' + menuItem.querySelector('h2').textContent);
//  }
  
//  // Add event listeners to menu items
//  var menuItems = document.querySelectorAll('.menu-item');
//  menuItems.forEach(function(item) {
//    item.addEventListener('click', handleMenuItemClick);
//  });


function blinker() {
    if (document.getElementById("blink")) {
        var d = document.getElementById("blink");
        d.style.color = (d.style.color == 'blue' ? 'red' : 'blue');
        setTimeout('blinker()', 900);
    }
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'block';
  });


  function toggleNavbar() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("open");

    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.style.display = navbarMenu.classList.contains("open") ? "flex" : "none";
  }

  window.addEventListener("resize", function() {
    const navbarMenu = document.getElementById("navbarMenu");
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    if (window.innerWidth > 768) {
      navbarMenu.classList.remove("open");
      navbarLinks.style.display = "flex";
    } else {
      navbarLinks.style.display = "none";
    }
  });

  function toggleNavbar() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("open");

    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.style.display = navbarMenu.classList.contains("open") ? "flex" : "none";
  }

  window.addEventListener("resize", function() {
    const navbarMenu = document.getElementById("navbarMenu");
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    if (window.innerWidth > 768) {
      navbarMenu.classList.remove("open");
      navbarLinks.style.display = "flex";
    } else {
      navbarLinks.style.display = "none";
    }
  });

  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
      card.addEventListener('click', () => {
          // Do something when a card is clicked
          console.log('Card clicked:', card);
      });
  });


  // Example: Smooth scrolling to anchor links
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Function to handle menu upload
function updateMenu(menuId) {
    const menuFileInput = document.getElementById(menuId + 'MenuFileInput');
    const file = menuFileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        // Update the menu content with the uploaded file's content
        const menuItem = document.getElementById(menuId);
        menuItem.innerHTML = e.target.result;
    };

    reader.readAsText(file);
}

// Function to add event listeners to menu upload buttons
function addMenuUploadListeners() {
    const menuItems = document.getElementsByClassName('menu-item');
    for (let menuItem of menuItems) {
        const menuId = menuItem.id;
        const menuFileInput = menuItem.querySelector('input[type="file"]');

        menuFileInput.addEventListener('change', function() {
            updateMenu(menuId);
        });
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addMenuUploadListeners();
});


  
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // Close menu when a link is clicked
  if (navLinks) {
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("active")
      }
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navLinks && !navLinks.contains(e.target) && (!mobileMenuBtn || !mobileMenuBtn.contains(e.target))) {
      navLinks.classList.remove("active")
    }
  })

  // Sticky header functionality
  const navbar = document.querySelector(".navbar")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      navbar.classList.add("sticky")

      // Hide on scroll down, show on scroll up
      if (scrollTop > lastScrollTop) {
        navbar.classList.add("hide")
      } else {
        navbar.classList.remove("hide")
      }
    } else {
      navbar.classList.remove("sticky")
      navbar.classList.remove("hide")
    }

    lastScrollTop = scrollTop
  })

  // FAQ toggle functionality
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement
      faqItem.classList.toggle("active")
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Here you would typically use a service like EmailJS, FormSubmit, or your own backend
      // For demonstration, we'll show an alert
      alert(`Thank you ${name}! Your message has been sent to our email.`)
      contactForm.reset()

      // In a real implementation, you would send the data to your server or email service
      // Example with EmailJS (you would need to include their script and set up an account):
      /*
            emailjs.send("service_id", "template_id", {
                name: name,
                email: email,
                message: message
            }).then(
                function(response) {
                    alert("Message sent successfully!");
                    contactForm.reset();
                },
                function(error) {
                    alert("Failed to send message. Please try again later.");
                }
            );
            */
    })
  }

  // Travel options redirect
  const transportItems = document.querySelectorAll(".transport-item")
  const bookTransportBtn = document.querySelector(".cta .btn-primary")

  if (bookTransportBtn) {
    bookTransportBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "#transport"
    })
  }

  if (transportItems) {
    transportItems.forEach((item) => {
      item.addEventListener("click", () => {
        const transportType = item.querySelector("h3").textContent.toLowerCase()
        let redirectUrl = ""

        switch (transportType) {
          case "flights":
            redirectUrl = "https://www.philippineairlines.com/"
            break
          case "ferries":
            redirectUrl = "https://travel.2go.com.ph/"
            break
          case "buses":
            redirectUrl = "https://www.phbus.com/"
            break
          case "car rentals":
            redirectUrl = "https://www.rentalcars.com/"
            break
          default:
            redirectUrl = "#"
        }

        if (redirectUrl !== "#") {
          window.open(redirectUrl, "_blank")
        }
      })

      // Add cursor pointer to indicate clickable
      item.style.cursor = "pointer"
    })
  }
})

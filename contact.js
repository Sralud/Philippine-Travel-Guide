document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
  
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active")

        faqItems.forEach((faqItem) => {
          faqItem.classList.remove("active")
        })

        if (!isActive) {
          item.classList.add("active")
        }
      })
    })

    const contactForm = document.getElementById("contactForm")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      console.log("Form submitted:", data)

      alert("Thank you for your message! We will get back to you soon.")

      contactForm.reset()
    })
  })  
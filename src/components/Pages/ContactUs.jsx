import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactUsImg from "../../assets/ContactUs.webp";
import emailjs from "@emailjs/browser"; // Import updated EmailJS SDK



const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // New phone number field
    message: "",
  });

  const [isDisable, setisDisable] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    alert("All fields except phone are required.");
    setisDisable(false);
    return;
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    alert("Please enter a valid email address.");
    setisDisable(false);
    return;
  }

  // Phone number validation (optional, but if entered, must be 10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (formData.phone && !phonePattern.test(formData.phone)) {
    alert("Please enter a valid 10-digit phone number.");
    setisDisable(false);
    return;
  }

  // Set default phone number if not provided
  const updatedFormData = {
    ...formData,
    phone: formData.phone ==="" ?( "Not entered by user"):formData.phone // Default phone number if not provided
  };

  setisDisable(true);

  try {
    // Send form using EmailJS with updatedFormData
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Use environment variables
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      updatedFormData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );

    alert("Message sent successfully!");

    // Reset form data
    setFormData({
      name: "",
      email: "",
      phone: "", // Reset phone number
      message: "",
    });
  } catch (error) {
    alert("Failed to send the message. Please try again later.");
    console.log("EmailJS Error:", error);
  } finally {
    setisDisable(false); // Re-enable form after completion
  }
};

  return (
    
    <>
      <img
        src={ContactUsImg}
        loading="lazy"
        alt="SKG SIP CART"
        style={{ width: "100%", minHeight: "35vh", objectFit: "cover" }}
      />
      <Container className="p-5">
        <Row className="align-items-center justify-content-around my-5">
          <Col md={5}>
            <h2 style={{ fontWeight: "700" }}>Contact Us</h2>
            <p>
              We are always here to assist you. Please feel free to contact us
              through the details provided or the form below, and our team will
              get back to you as soon as possible.
            </p>

            <h3 style={{ fontWeight: "700", marginTop: "20px" }}>Our Office</h3>
            <p>
              118 FIRST FLOOR AGGARWAL E MALL SECTOR 7 ROHINI DELHI 110085,
              India
              <br />
              Telephone: +(91) 98714 84948, 99108 99008
              <br />
              E-mail: skgsipcart@gmail.com
            </p>

            <h3 style={{ fontWeight: "700", marginTop: "20px" }}>
              Working Hours
            </h3>
            <p>
              Monday to Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </Col>

          <Col md={5}>
            <h2 style={{ fontWeight: "700", marginBottom: "30px" }}>
              Get in Touch
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  style={{ height: "50px", fontSize: "16px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  style={{ height: "50px", fontSize: "16px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Control
                  type="tel" // Change input type to tel for phone numbers
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  style={{ height: "50px", fontSize: "16px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  required
                  style={{ fontSize: "16px" }}
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ padding: "10px 30px", fontSize: "16px" }}
                  disabled={isDisable}
                >
                  {isDisable ? "Sending..." : "Send"}
                </Button>
                <Button
                  variant="outline-secondary"
                  type="reset"
                  style={{ padding: "10px 30px", fontSize: "16px" }}
                  onClick={() => {
                    setFormData({ name: "", email: "", phone: "", message: "" });
                    setisDisable(false); // Re-enable form if reset
                  }}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="py-5">
          <Col>
            <h3 style={{ fontWeight: "700" }}>Our Location</h3>
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="Google Maps Location of SKG SIP CART Office"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2583.4473880023315!2d77.11672217591811!3d28.701568951929826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzA4LjUiTiA3N8KwMDcnMDAuMSJF!5e0!3m2!1sen!2sin!4v1727508340474!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;

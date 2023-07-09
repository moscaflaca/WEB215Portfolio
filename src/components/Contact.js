import React from "react";
import "./Contact.css";


export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div>
        <div>
          <h1>
            Contact information
          </h1>
          <div>
              <h2>
                Email
              </h2>
              <a>
                dbguijarro@my.waketech.edu
              </a>
              <h2>
                Phone
              </h2>
              <p>123-456-7890</p>
            </div> <div>
            </div>
          <iframe id="location"
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103745.00636193657!2d-78.84891345664059!3d35.65159680000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8bd3792852a9%3A0x763d8c798479a213!2sWake%20Technical%20Community%20College-%20Southern%20Wake%20Campus!5e0!3m2!1sen!2sus!4v1687897655063!5m2!1sen!2sus">

            </iframe>
          <div>
            <div>
              <h2>
                Address
              </h2>
              <p>
              9101 Fayetteville Rd. <br />
              Raleigh, NC 27603
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

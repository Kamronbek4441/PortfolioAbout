import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = '7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA'; 
    const chatId = '5764570183'; 

    const text = `📝 Yangi xabar:\n\n👤 Ism: ${formData.name}\n📧 Email: ${formData.email}\n💬 Xabar: ${formData.message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: text }),
    });

    alert("Xabaringiz yuborildi!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;



// import styles from './ContactStyles.module.css';

// function Contact() {
//   return (
//     <section id="contact" className={styles.container}>
//       <h1 className="sectionTitle">Contact</h1>
//       <form action="">
//         <div className="formGroup">
//           <label htmlFor="name" hidden>
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Name"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="email" hidden>
//             Email
//           </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="message" hidden>
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Message"
//             required></textarea>
//         </div>
//         <input className="hover btn" type="submit" value="Submit" />
//       </form>
//     </section>
//   );
// }

// export default Contact;

// import React, { useState } from 'react';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission here (e.g., API call)
//     console.log('Form submitted:', formData);

//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//     setSubmitted(true);

//     // Optionally hide the success message after a few seconds
//     setTimeout(() => setSubmitted(false), 5000);
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>

//       <p className="text-lg text-gray-600 text-center mb-10">
//         Having trouble uploading documents or navigating the platform? We’re here to help. Reach out to us using the form below.
//       </p>

//       {submitted && (
//         <div className="mb-6 text-center text-green-600 font-medium">
//           ✅ Message sent successfully! We'll get back to you shortly.
//         </div>
//       )}

//       <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Your full name"
//               required
//             />
//           </div>
// e
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               rows="5"
//               placeholder="Let us know how we can help..."
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       <div className="mt-10 text-center text-sm text-gray-600">
//         Prefer email? Contact us directly at{' '}
//         <a
//           href="mailto:support@collegeplatform.edu"
//           className="text-blue-600 underline hover:text-blue-800"
//         >
//           support@collegeplatform.edu
//         </a>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;







import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (formData.name.trim().length < 3) {
      alert('Name should be at least 3 characters long.');
      return;
    }

    if (formData.message.trim().length < 10) {
      alert('Message should be at least 10 characters long.');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      setLoading(false);

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-3xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-4">Contact Us</h1>

      <p className="text-lg text-gray-600 text-center mb-10">
        Having trouble uploading documents or navigating the platform? We’re here to help. Reach out to us using the form below.
      </p>

      {submitted && (
        <div className="mb-6 text-center text-green-600 font-medium animate-pulse">
          ✅ Message sent successfully! We'll get back to you shortly.
        </div>
      )}

      <div className="bg-gray-500 shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              aria-label="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              aria-label="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="5"
              placeholder="Let us know how we can help..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : null}
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="mt-10 text-center text-sm text-gray-600">
        Prefer email? Contact us directly at{' '}
        <a
          href="mailto:support@collegeplatform.edu"
          className="text-blue-600 underline hover:text-blue-800"
        >
          support@collegeplatform.edu
        </a>
      </div>
    </div>
  );
}

export default ContactUs;


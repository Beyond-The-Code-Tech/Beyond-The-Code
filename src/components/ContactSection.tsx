import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection: React.FC = () => {
  // Formspree hook
  const [state, handleSubmit] = useForm("mvgoreal"); // Replace "mvgoreal" with your Formspree form ID

  if (state.succeeded) {
    return (
      <section id="contact" className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
              <MessageSquare className="inline-block mr-2 mb-1" />
              Thank You!
            </h2>
            <p className="text-lg text-space-white/80 max-w-2xl mx-auto">
              Your message has been sent successfully. We’ll get back to you soon!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
            <MessageSquare className="inline-block mr-2 mb-1" />
            Contact Portal
          </h2>
          <p className="text-lg text-space-white/80 max-w-2xl mx-auto">
            Ready to collaborate? Send a transmission through the cosmic waves.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-nebula-dark/50 backdrop-blur-sm p-8 rounded-xl"
        >
          <div>
            <label htmlFor="name" className="block text-space-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Required for Formspree
              className="w-full px-4 py-2 rounded-lg bg-space-black/50 border border-cosmic-blue/30 
                       focus:border-cosmic-blue focus:ring-2 focus:ring-cosmic-blue/20 outline-none
                       transition-colors duration-300"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email" className="block text-space-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Required for Formspree
              className="w-full px-4 py-2 rounded-lg bg-space-black/50 border border-cosmic-blue/30 
                       focus:border-cosmic-blue focus:ring-2 focus:ring-cosmic-blue/20 outline-none
                       transition-colors duration-300"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block text-space-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Required for Formspree
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-space-black/50 border border-cosmic-blue/30 
                       focus:border-cosmic-blue focus:ring-2 focus:ring-cosmic-blue/20 outline-none
                       transition-colors duration-300 resize-none"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 rounded-lg cosmic-gradient text-space-white font-semibold
                     flex items-center justify-center gap-2 shadow-lg hover:shadow-cosmic-blue/50 
                     transition-shadow duration-300"
          >
            <Send className="w-5 h-5" />
            {state.submitting ? "Sending..." : "Send Transmission"}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-space-white/80">Or reach out directly:</p>
          <a
            href="mailto:beyondthecode0@gmail.com"
            className="inline-flex items-center gap-2 mt-2 text-cosmic-blue hover:text-cosmic-purple transition-colors"
          >
            <Mail className="w-5 h-5" />
            beyondthecode0@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

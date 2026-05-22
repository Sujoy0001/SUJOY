import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

export default function ContactPage() {
  const { contact } = portfolioData;
  const [formState, setFormState] = useState({ name: '', email: '', budget: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contact.cta.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch("https://formspree.io/f/mvgwqknl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', budget: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || "Failed to submit form. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please check your network connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#f5f5f3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-left transition-colors duration-300 min-h-screen">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Copywriting & Physical Details */}
        <div className="lg:col-span-5 space-y-10 flex flex-col justify-start">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Contact Workspace
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-none">
              Let's craft your next launch
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed pt-2 font-medium">
              {contact.subheading}
            </p>
          </div>

          {/* Side Info Cards */}
          <div className="space-y-4">
            
            {/* Email Card (with click-to-copy utility) */}
            <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors shadow-2xs">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-900 dark:text-white flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-grow space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">Email Address</span>
                <a href={`mailto:${contact.cta.email}`} className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white hover:underline transition-all">
                  {contact.cta.email}
                </a>
              </div>
              <button 
                onClick={copyEmailToClipboard}
                className="flex items-center justify-center p-2 rounded-xl text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 hover:dark:text-white hover:bg-zinc-50 hover:dark:bg-zinc-800 hover:border border-zinc-200/50 dark:border-zinc-700 transition-all self-center cursor-pointer"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-900 dark:text-white flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">Base Location</span>
                <span className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">{contact.cta.location}</span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 shadow-2xs">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-900 dark:text-white flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 block uppercase tracking-wider">Phone</span>
                <span className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">{contact.cta.phone}</span>
              </div>
            </div>

          </div>

          {/* Social Icons Connect */}
          <div className="space-y-3 pt-4">
            <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">Follow Connections</h4>
            <div className="flex flex-wrap gap-3">
              {contact.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-bold px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-full text-zinc-700 dark:text-zinc-350 hover:bg-zinc-950 hover:dark:bg-white hover:text-white hover:dark:text-zinc-950 hover:border-zinc-950 hover:dark:border-white transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Intake Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 rounded-[32px] p-6 sm:p-10 shadow-2xs relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-white mb-6">Brief Project Intake</h3>

                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm sm:text-base dark:text-white focus:border-zinc-950 focus:dark:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm sm:text-base dark:text-white focus:border-zinc-950 focus:dark:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Budget Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Approximate Budget</label>
                    <select 
                      id="budget"
                      name="budget"
                      required
                      value={formState.budget}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm sm:text-base dark:text-white focus:border-zinc-950 focus:dark:border-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select project budget</option>
                      <option value="under-2k">Under $2,000</option>
                      <option value="2k-5k">$2,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="above-10k">Above $10,000</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Project Details</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Describe your goals, targets, required timeline, and specific deliverables..."
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm sm:text-base dark:text-white focus:border-zinc-950 focus:dark:border-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="text-red-600 dark:text-red-400 text-sm font-semibold text-center bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-950/50 rounded-xl py-3 px-4 transition-all duration-300 animate-pulse">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full inline-flex items-center justify-center gap-3 bg-zinc-950 dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-sm sm:text-base px-8 py-4.5 rounded-xl shadow-md transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Transmitting Ingestion...' : 'Transmit Project Details'}</span>
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div 
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                >
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-zinc-700 shadow-sm animate-bounce">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-zinc-950 dark:text-white">Ingestion Complete</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm">
                      Your details have successfully processed. I typically reply within 24 operational business hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="inline-flex items-center text-xs font-bold text-zinc-950 dark:text-white border-b-2 border-zinc-950 dark:border-white hover:text-zinc-500 hover:border-zinc-400 transition-colors pb-0.5 cursor-pointer"
                  >
                    Submit Another Details Card
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </div>
  );
}

"use client";

import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          We'd love to hear from you! Reach out to us via the form below or connect through our social media.
        </p>

        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn_primary px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

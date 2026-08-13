"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function LMSPartner() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Left - LMS Logo */}
          <div className="shrink-0">
            <div className="flex items-center gap-1">
              {/* LMS text logo styled like Odoo */}
              <span className="text-6xl md:text-7xl font-light tracking-tight">
                <span className="text-[#714b67]">L</span>
                <span className="text-[#8f8f8f]">M</span>
                <span className="text-[#8f8f8f]">S</span>
              </span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-[28px] font-semibold text-[#2c3e50] tracking-tight">
              Official LMS Partner
            </h2>
            <p className="text-[#7f8c8d] text-base md:text-lg leading-[1.7] max-w-2xl">
              We design, implement and support LMS solutions tailored to your business. 
              From implementation to customization and long-term support — we help 
              companies get the most from their learning management systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
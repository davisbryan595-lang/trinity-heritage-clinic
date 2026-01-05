"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { LucideIcon, ChevronRight } from "lucide-react";

interface AnimatedServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  color: "primary" | "accent";
  itemIcon?: LucideIcon;
}

export default function AnimatedServiceCard({
  icon: Icon,
  title,
  items,
  color,
  itemIcon: ItemIcon,
}: AnimatedServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const gradientColor =
    color === "primary"
      ? "from-blue-400 via-teal-500 to-green-400"
      : "from-amber-400 via-orange-500 to-rose-400";

  const borderClass =
    color === "primary" ? "border-primary/20" : "border-accent/20";
  const hoverBorderClass =
    color === "primary" ? "hover:border-primary" : "hover:border-accent";
  const bgClass = color === "primary" ? "bg-primary/10" : "bg-accent/10";
  const textClass = color === "primary" ? "text-primary" : "text-accent";
  const buttonClass =
    color === "primary"
      ? "bg-primary hover:bg-primary/90"
      : "bg-accent hover:bg-accent/90";

  return (
    <motion.div
      ref={ref}
      className="group"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${borderClass} ${hoverBorderClass} bg-white animate-rotating-glow`}
      >
        {/* Scroll-Reveal Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 pointer-events-none`}
          animate={{ opacity: isInView ? 0.3 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Content */}
        <CardContent className="p-8 relative z-10">
          {/* Icon Container */}
          <motion.div
            className={`w-16 h-16 rounded-2xl ${bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform diamond-glow`}
            animate={{ y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Icon className={`w-8 h-8 ${textClass}`} />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-foreground mb-6 font-serif"
            animate={{ opacity: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h3>

          {/* Items List */}
          <motion.ul
            className="space-y-3 mb-6"
            animate={{ opacity: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.6 }}
          >
            {items.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                animate={{ x: isInView ? 0 : -10 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {ItemIcon ? (
                  <ItemIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${textClass}`} />
                ) : (
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5 ${textClass}`} />
                )}
                <span className="text-muted-foreground text-sm">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            animate={{ opacity: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/contact"
              className={`block w-full text-center ${buttonClass} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl`}
            >
              Inquire Now
              <ChevronRight className="w-4 h-4 inline ml-2" />
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

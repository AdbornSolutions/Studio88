import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PrimaryButton } from '../ui/PrimaryButton';
import { useMotionProfile } from '../../contexts/MotionContext';
import { navItems } from '../../data/navigation';
import { EASE } from '../../utils/motion';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { reduced } = useMotionProfile();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="absolute inset-x-0 top-full h-[calc(100svh-5rem)] bg-ivory text-charcoal lg:hidden">
        
          <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-6 pb-10 pt-6">
            <ul>
              {navItems.map((item, i) =>
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : 0.05 + i * 0.05, ease: EASE }}>
              
                  <a
                href={item.href}
                onClick={onClose}
                className="block border-b border-charcoal/10 py-4 font-display text-3xl font-light uppercase tracking-[0.02em]">
                
                    {item.label}
                  </a>
                </motion.li>
            )}
            </ul>
            <PrimaryButton href="#contact" onClick={onClose} className="w-full">
              Book a Showroom Visit
            </PrimaryButton>
          </nav>
        </motion.div>
      }
    </AnimatePresence>);

}
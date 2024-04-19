'use client';
import { motion } from 'framer-motion';

export default function Template({ children }) {
    return (
        <motion.div
            className="bg-gradient-to-r from-green-200 via-green-50 to-green-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
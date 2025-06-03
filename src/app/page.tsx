'use client'

import styles from './page.module.css';
import useMousePosition from '../../hooks/useMousePosition';

import { useState } from 'react';
import { motion } from 'framer-motion';
export default function Mask() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const size = isHovered ? 300 : 40;

  if (x === null || y === null) return null;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
          Passionate about web development and constantly learning new tools and technologies to improve myself and software skills.
        </p>
      </motion.div>

      {/* Body */}
      <div className={styles.body}>
        <p>Hello. <span>I&apos;m John Doe, </span>a web developer from Cavite, Philippines. I love to build things and provide business solutions.</p>
      </div>
    </main>
  );
}

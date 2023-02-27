import Link from "next/link";
import styles from '../styles/Home.module.css';
import { hocTransition } from "../HOC/hocTransition";
import { motion } from "framer-motion"
import Image from "next/image";

function Uzbekistan() {
  return (
    <div className="content">
      <motion.div
        initial={{
          opacity: 0,
          y: -50
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h1 className={styles.title}>Uzbekistan</h1>
      </motion.div>
      <div className={styles.contentArea}>
        <Image width={800} height={500} alt='' src="/uzbekistan.jpg" className={styles.image} />
        <div className={styles.aboutText}>
          <p className={styles.texts}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className={styles.texts}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Link className={styles.pagination} href="/">
          ...Main menu
        </Link>
        <Link className={styles.pagination} href="/france">
          France
        </Link>
        <Link className={styles.pagination} href="/japan">
          Japan
        </Link>
      </div>
    </div>
  )
}

export default hocTransition(Uzbekistan);
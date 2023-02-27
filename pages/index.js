import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css';
import { hocTransition } from "../HOC/hocTransition";
import { motion } from "framer-motion"

function Home() {
  const whileHover = { scale: 1.1 };
  const whileTap = { scale: 0.9 };

  return (
    <div className={styles.cards}>
      <Link href="/uzb">
        <motion.div className={styles.cardsLink} whileHover={whileHover} whileTap={whileTap}>
          <Image src="/uzbekistan.jpg" className={styles.cardsImage} width={380} height={300} alt="Image"/>
        </motion.div>
      </Link>
      <Link href="/france">
        <motion.div className={styles.cardsLink} whileHover={whileHover} whileTap={whileTap}>
          <Image src="/france.jpg" className={styles.cardsImage} width={380} height={300} alt="Image"/>
        </motion.div>
      </Link>
      <Link href="/japan">
        <motion.div className={styles.cardsLink} whileHover={whileHover} whileTap={whileTap}>
          <Image src="/japan.jpg" className={styles.cardsImage} width={380} height={300} alt="Image"/>
        </motion.div>
      </Link>
    </div>
  )
}

export default hocTransition(Home);
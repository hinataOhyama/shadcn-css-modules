import { ButtonSection } from "./_components/button-section";
import { CardSection } from "./_components/card-section";
import { DialogSection } from "./_components/dialog-section";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ButtonSection />
        <DialogSection />
        <CardSection />
      </main>
    </div>
  );
}

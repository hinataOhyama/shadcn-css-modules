import { ButtonSection } from "./_components/button-section";
import { CardSection } from "./_components/card-section";
import { DialogSection } from "./_components/dialog-section";
import { ToastSection } from "./_components/toast-section";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ButtonSection />
        <DialogSection />
        <CardSection />
        <ToastSection />
      </main>
    </div>
  );
}

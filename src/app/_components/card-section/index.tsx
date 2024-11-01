import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "./index.module.css";

export const CardSection = () => {
  return (
    <section>
      <h2>Cardコンポーネント</h2>
      <Card className={styles.card}>
        <CardHeader withBorder>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter withBorder>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

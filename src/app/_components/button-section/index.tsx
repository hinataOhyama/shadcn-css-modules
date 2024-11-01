import { Button } from "@/components/ui/button";

export const ButtonSection = () => {
  return (
    <section>
      <h2>Buttonコンポーネント</h2>
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button size="sm">Small Button</Button>
      <Button variant="outline" size="lg">
        Large Outline Button
      </Button>
    </section>
  );
};

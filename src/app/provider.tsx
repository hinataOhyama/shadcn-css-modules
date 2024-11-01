import { ToastProvider, ToastViewport } from "@/components/ui/toast";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      {children}
      <ToastViewport />
    </ToastProvider>
  );
};

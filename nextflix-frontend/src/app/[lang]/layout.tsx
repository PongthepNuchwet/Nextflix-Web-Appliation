import TapBar from "@/components/layout/TapBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <TapBar />
      {children}
    </main>
  );
}

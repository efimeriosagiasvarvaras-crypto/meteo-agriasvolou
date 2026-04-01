export const metadata = {
  title: "Meteo Αγριάς",
  description: "Τοπική μετεωρολογική ενημέρωση"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}

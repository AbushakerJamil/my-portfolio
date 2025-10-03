import "./globals.css";

export const metadata = {
  title: "A .Jamil",
  description: "Abushaker Jamil",
  icons: {
    icon: "/mylogoo.webp", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "A .Jamil",
  description: "Abushaker Jamil",
  icons: {
    icon: "/logo.png", 
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

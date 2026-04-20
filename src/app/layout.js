
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css" ;

export const metadata = {
  title: "Dashboard | Unocoin",
  description: "Unocoin Dashboard lets you check the graphs, prices and your holdings of INR and cryptos",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body>
         
        {children}</body>
    </html>
  );
}

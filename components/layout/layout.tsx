// components/layout/layout.tsx
import Header from "../header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <Header />
      <main>{children}</main>
    </body>
  );
}

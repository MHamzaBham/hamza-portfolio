import "../../globals.css";

export const metadata = {
  title: "Admin Panel",
};

export const dynamic = "force-static";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="font-[poppins]">
          <h1>ADMIN LAYOUT</h1>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

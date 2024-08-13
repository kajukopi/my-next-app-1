import Links from "@/app/ui/nav-links"
export const metadata = {
  title: "Next.js",
  description: "Get ready",
}
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.3.2/mdb.min.css" rel="stylesheet" />
      </head>
      <body>
        <section className="container my-5">
          <header>
            <Links />
          </header>
          <main>{children}</main>
          <footer></footer>
        </section>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.0.0/mdb.umd.min.js"></script>
      </body>
    </html>
  )
}

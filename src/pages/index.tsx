import * as React from "react"
import Footer from "./_footer"
import Main from "./_main"
import Header from "./_header"

// markup
const IndexPage = () => {
  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </body>
  )
}

export default IndexPage

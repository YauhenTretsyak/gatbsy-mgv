import * as React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { theme } from "../styles/theme"
import { Helmet } from "react-helmet"
import { Header, HeroSection, PriceSection, Footer } from "../components"


// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet 
        title="More Growth Ventures"
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet"/>
      </Helmet>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <PriceSection />
      <Footer />
    </ThemeProvider>
  )
}

export default IndexPage

import * as React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { theme } from "../styles/theme"
import { Helmet } from "react-helmet"
import MainPage from "../styles/StyledElements/MainPage"
import { Header, HeroSection, IntroMainSection, IntroSections, PriceSection, Footer } from "../components"


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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <GlobalStyle />
      <MainPage>
        <Header />
        <HeroSection />
        <IntroMainSection />
        <IntroSections />
        <PriceSection />
        <Footer />
      </MainPage>
    </ThemeProvider>
  )
}

export default IndexPage

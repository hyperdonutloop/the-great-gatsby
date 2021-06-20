import * as React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { Loader } from '@components'
import { GlobalStyle, theme } from '@styles'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ location, children }) => {
  const isHome = location.pathname === '/'
  const [isLoading, setIsLoading ] = React.useState(isHome)

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'))

    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }

  React.useEffect(() => {
    if (isLoading) {
      return
    }

    if (location.hash) {
      const id = location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }

    handleExternalLinks()
  }, [isLoading])

  return (
    <>
    <div id='root'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContent>
            <div id='content'>
              {children}
            </div>
          </StyledContent>
      </ThemeProvider>
    </div>
    </>
  )
}

export default Layout

// to re-enable customer loader remove StyledContent Block and replace with this
/* {isLoading && isHome ? (
  <Loader finishLoading={() => setIsLoading(false)} />
  ) : (
    <StyledContent>
      <div id='content'>
        {children}
      </div>
    </StyledContent>
  )} */
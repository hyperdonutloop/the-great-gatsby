import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '@components'
import styled from 'styled-components'

const StyledMainContainer = styled.main`
  counter-reset: section;
`;




// using parenthesis rather than curly braces is an implicit return
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className='fillHeight'>
      hello
    </StyledMainContainer>

  </Layout>
)

export default IndexPage

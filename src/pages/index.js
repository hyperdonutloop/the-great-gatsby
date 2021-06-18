import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const StyledMainContainer = styled.main`
  counter-reset: section;
`;




// markup
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className='fillHeight'>
      hello
    </StyledMainContainer>

  </Layout>
)

export default IndexPage

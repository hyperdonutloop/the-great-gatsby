import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { email } from '@config'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const one = <h1>Hey, I'm</h1>
  const two = <h2 className='big-heading'>Ryan</h2>
  const three = <h3 className='big-heading'>I build cool shit.</h3>
  const four = (
    <p>
      I'm a photographer + web developer based in Carlsbad, California. I like some cool stuff, because I am a cool dude.
    </p>
  )
  const five = (
    <a href={`mailto:${email}`} className='email-link'>
      Say Hi
    </a>
  )

  const items = [one, two, three, four, five]
  
  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>

      
      {items.map((item, i) => (
        <CSSTransition key={i} classNames='fadeup'>
          <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
        </CSSTransition>
      ))}
      </TransitionGroup>
    </StyledHeroSection>
  )
}

export default Hero

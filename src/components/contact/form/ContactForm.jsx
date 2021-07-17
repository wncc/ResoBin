import styled from 'styled-components'

import { FormBody } from 'components/contact/form'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight});
  margin: 0 ${({ theme }) => theme.asideWidth} 0
    ${({ theme }) => theme.navbarHorizontalWidth};
`

const Title = styled.h4`
  margin: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.darksecondary};
`

const ContactForm = () => {
  return (
    <Container>
      <Title> Contact us </Title>
      <FormBody />
    </Container>
  )
}

export default ContactForm

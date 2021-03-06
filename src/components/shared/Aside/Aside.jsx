import styled from 'styled-components/macro'

import { Divider, LoaderAnimation } from 'components/shared'
import { useResponsive } from 'hooks'

export const AsideHeader = ({ title, subtitle, loading, loadingComponent }) => (
  <div>
    <Header>
      <Title>{title}</Title>
      {subtitle}
    </Header>

    <Divider margin="0" />

    {loading && (
      <>
        <LoaderAnimation />
        {loadingComponent}
      </>
    )}
  </div>
)

const AsideContainer = ({
  title,
  subtitle,
  loading,
  loadingComponent,
  visible,
  children,
}) => (
  <Container visible={visible}>
    {title && (
      <AsideHeader loading={loading} title={title} subtitle={subtitle} />
    )}

    {!title && loading && (
      <>
        <LoaderAnimation />
        {loadingComponent}
      </>
    )}

    <Children>{children}</Children>
  </Container>
)

const Aside = (params) => {
  const { isDesktop } = useResponsive()

  return <AsideContainer {...params} visible={isDesktop} />
}

export default Aside

const Container = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.headerHeight};
  right: ${({ visible }) => (visible ? '0' : '-100%')};
  z-index: 5;
  width: ${({ theme }) => theme.asideWidthRight};
  height: calc(100vh - 3rem);
  padding: 0 1rem;
  background: ${({ theme }) => theme.secondary};
  box-shadow: 2px 0 5px rgb(0 0 0 / 30%);
  transition: right 200ms ease-in;
`

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  height: 2.25rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
`

const Title = styled.h4`
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
  font-size: 1.25rem;
`

const Children = styled.div`
  height: 100%;
  padding: 1rem 0 20rem;
  overflow-y: auto;
`

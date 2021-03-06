import { Tabs } from 'antd'
import { rgba, darken } from 'polished'
import styled from 'styled-components/macro'

const StyledTabs = styled(Tabs)`
  color: ${({ theme }) => theme.textColor};

  .ant-tabs-nav {
    margin-bottom: 0;

    .ant-tabs-ink-bar {
      height: 3px;
      background: ${({ theme }) => theme.textColor};
    }
  }

  .ant-tabs-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ tabwidth }) => tabwidth};
    height: ${({ tabheight }) => tabheight};
    padding: 0;
    font-size: 0.75rem;
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.borderRadius};

    & + .ant-tabs-tab {
      margin: 0;
    }

    .ant-tabs-tab-btn {
      color: ${({ theme }) => theme.textColor};
    }

    /* Disabled button */
    &.ant-tabs-tab-disabled {
      .ant-tabs-tab-btn,
      .ant-tabs-tab-btn:active {
        color: ${({ theme }) => rgba(theme.textColor, 0.2)};
      }
    }

    /* Normal button */
    &:not(.ant-tabs-tab-disabled) {
      &:hover {
        color: ${({ theme }) => darken(0.2, theme.textColor)};
      }

      &.ant-tabs-tab-active {
        color: ${({ theme }) => theme.textColor};
        background: ${({ theme }) => theme.darksecondary};
      }

      &:not(.ant-tabs-tab-active):hover {
        background: ${rgba('#000000', 0.15)};
      }
    }
  }
`

export default StyledTabs

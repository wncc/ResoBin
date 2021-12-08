import { Tooltip } from 'antd'
import styled from 'styled-components/macro'

import { colorPicker } from 'styles/utils'

// repeat n times a Box component with color = color
const CourseWorkloadItem = ({ value, color, title }) =>
  value <= 0 ? null : (
    <BoxContainer
      title={`${title}: ${value} hour${value > 1 ? 's' : ''} / week`}
    >
      {[...Array(value)].map((e, i) => (
        <Box key={String(i)} color={color} />
      ))}
    </BoxContainer>
  )

const CourseWorkload = ({ workload }) => {
  const workloadItems = [
    { title: 'Lecture', value: workload.lecture },
    { title: 'Tutorial', value: workload.tutorial },
    { title: 'Lab', value: workload.selfstudy },
    { title: 'Practical', value: workload.practical },
  ].map((item) => {
    const num = parseInt(item.value, 10)
    return { ...item, value: Number.isNaN(num) ? 0 : num }
  })

  const totalWorkload = workloadItems.reduce((acc, item) => acc + item.value, 0)

  return totalWorkload > 0 ? (
    <>
      <Title>Workload</Title>
      <Container>
        {workloadItems.map(({ title, value }, idx) => (
          <CourseWorkloadItem
            key={title}
            title={title}
            value={value}
            color={colorPicker(idx)}
            style={{ marginLeft: idx > 0 ? '0' : 'initial' }}
          />
        ))}
      </Container>
    </>
  ) : (
    <Title style={{ marginBottom: '1rem', opacity: 0.8 }}>
      Workload not found
    </Title>
  )
}

export default CourseWorkload

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 10rem;
  margin-bottom: 1rem;
  padding: 4px;
  overflow: auto;
  background: ${({ theme }) => theme.darksecondary};
  border-radius: 10px;
`

const BoxContainer = styled(Tooltip)`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  height: 1.5rem;
  margin: 4px;
  border-radius: 4px;
`

const Box = styled.div`
  width: 1rem;
  height: 100%;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`

const Title = styled.span`
  display: block;
  margin: 0 0.25rem 0.25rem;
  color: ${({ theme }) => theme.textColor};
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
`

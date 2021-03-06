import { CloudUpload } from '@styled-icons/heroicons-outline'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import {
  CourseContentRequest,
  CourseContentRequestIcon,
} from 'components/CoursePage'
import { ButtonSquare, LoaderAnimation, toast } from 'components/shared'
import { API } from 'config/api'
import { useResponsive } from 'hooks'

import { CourseResourceGrid } from './CourseResourceItem'

const CourseResourceContainer = () => {
  const { code } = useParams()
  const navigate = useNavigate()
  const { isMobileS } = useResponsive()

  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true)
        const response = await API.courses.listResources({ code })
        setResources(response)
      } catch (error) {
        toast({ status: 'error', content: error })
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [code])

  const redirectContribute = () => navigate(`/contribute?course=${code}`)

  if (loading) return <LoaderAnimation />

  return (
    <>
      <Header>
        <h1 style={{ fontSize: '1.25rem' }}>Resources</h1>

        <ButtonContainer>
          {isMobileS ? (
            <CourseContentRequestIcon
              code={code}
              type="resources"
              style={{ marginRight: '0.75rem' }}
            />
          ) : (
            <CourseContentRequest
              code={code}
              type="resources"
              style={{ marginRight: '0.75rem' }}
            />
          )}

          <ButtonSquare
            type="primary"
            onClick={redirectContribute}
            icon={<CloudUpload size="16" />}
          >
            Upload
          </ButtonSquare>
        </ButtonContainer>
      </Header>

      {resources.length ? (
        <CourseResourceGrid items={resources} />
      ) : (
        <span style={{ fontSize: '0.875rem' }}>No resources found</span>
      )}
    </>
  )
}

export default CourseResourceContainer

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`

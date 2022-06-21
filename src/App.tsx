import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { client } from './lib/apollo'

const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }
`

interface LessonProps {
  id: string;
  title: string;
}

function App() {

  const { data } = useQuery<{lessons: LessonProps[]}>(GET_LESSONS_QUERY)

  return (
    <ul>
        {data?.lessons.map(lesson => (
          <li key={lesson.id}> {lesson.title} </li>
        ))}
    </ul>
  )
}

export default App

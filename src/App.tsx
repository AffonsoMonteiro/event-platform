import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import { Event } from './pages/Event'

// const GET_LESSONS_QUERY = gql `
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `


function App() {

  // const { data } = useQuery<{lessons: LessonProps[]}>(GET_LESSONS_QUERY)

  return (
    <div>
      <Event />
    </div>
  )
}

export default App

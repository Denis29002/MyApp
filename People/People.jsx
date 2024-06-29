import React from 'react'
import { data } from './data'
import PeopleItem from './PeopleItem'

const People = () => {
  return (
      <div>
        {data.map(el => <PeopleItem
          company={el.company}
          position={el.position}
          isNew={el.new}
          featured={el.featured}
          postedAt={el.postedAt}
          contract={el.contract}
          location={el.location}
          languages={el.languages}
          role={el.role}
          level={el.level}
          tools={el.tools} />)}
        </div>
  )
}

export default People
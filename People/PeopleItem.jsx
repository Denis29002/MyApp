import React from 'react'

const PeopleItem = ({company, position, isNew, featured, postedAt, contract, location, languages, role, level, tools}) => {
  return (
  
    <div className="peoples">
        <div className='main_info'>
          <div className='company'>{company}</div>
          <h3 className='position'>{position}</h3>
          <p>{isNew && "new"}</p>
          <p>{featured && "featured"}</p>
          <div className='dopInfo'> <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div> 
         </div>
        <div className='main_skills'>
          <div className='skills'>
            {[ ...languages,role, level, ...tools]
            .map(item => <div className='skills_info'>{item}</div> )
          }
          </div>
        </div>
    </div>
  )
}

export default PeopleItem
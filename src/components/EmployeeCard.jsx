import React from 'react';
import { Text } from '@mantine/core';
import team from '../data/team.json';

const EmployeeCard = () => {
  return (
	  <>
    {team
    .map((person, key) => (
      <div className="card">
        <div className="content">
          <div className="front">
            <img 
              src={person.image}
              width="300px" 
              height="400px" 
              alt="it's me" 
              style={{ 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                borderRadius: 5 
              }} 
            />
          </div>
          <div className="back">
            <div className="details">
              <Text className="name">{person.name}</Text>
              <Text weight={500} className="position">{person.title}</Text>
              <Text weight={500} className="bio">{person.bio}</Text>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default EmployeeCard;
import React from 'react'

function Child(props) 
{
    console.log(props);
  return (
    <div>Child</div>
  )
}
export default React.memo(Child)

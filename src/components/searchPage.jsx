import React from 'react'

function searchPage() {
  return (
    <div>
       {showSearchbar &&(
          <input type="text"></input>)}
    </div>
  )
}

export default searchPage

import axios from "axios"
import React, { useState, useEffect } from "react"
// import "

const ProjectsHooks = () => {
  const [userData, setUserData] = useState(null)
  const [repoData, setRepoData] = useState([])
  const [topRepos, setTopRepos] = useState([])

  //   const handleToogle = e => {
  //     console.log(e)
  //     setIdFromFoodButtonClick("" + e)
  //     console.log(idFromFoodButtonClick.replace(/\s/g, "+").toLocaleLowerCase())
  //     setToggled(true) //if this is true than open up the textbox with the list of ingredients
  //   }

  const getTopRepos = type => {
    const LIMIT = 9
    const map = {
      size: "size",
    }
    const sortProperty = map[type]
    const sorted = repoData
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT)

    setTopRepos(sorted)
  }

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/shaniakiat/repos?per_page=100`)
      .then(res => {
        console.log(res.data)
        // console.log(res.data.hits);
        // console.log(1);
        // (res.data.hits)
        setRepoData(res.data)
        getTopRepos("size")
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="grid-container">
      {topRepos.map(obj => (
        <div className="grid-item">{obj.name.toLowerCase()}</div>
      ))}
    </div>
  )
}

export default ProjectsHooks

// < div className = "grid-item" > Repo 2</div >
//     <div className="grid-item">Repo 3</div>
//     <div className="grid-item"></div>
//     <div className="grid-item"></div>
//     <div className="grid-item"></div>
//     <div className="grid-item"></div>
//     <div className="grid-item"></div>
//     <div className="grid-item"></div>

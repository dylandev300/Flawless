import React from 'react'
import Flws from '../Flws'
import Meal from '../Meal'
import Recipe from '../Recipe'
import {Route,Routes} from 'react-router-dom';

const Switch = () => {
  return (
    <>
<Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route path="/meal" element={<Meal/>} />
      <Route path="/flws" element={<Flws/>} />
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
      </>
  )
}

export default Switch

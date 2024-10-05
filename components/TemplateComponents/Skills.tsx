
import React, { useState } from 'react'

import { Input } from '../ui/input'
import { Card,CardContent,CardHeader,CardTitle } from '../ui/card'
import { Button } from '../ui/button'


const Skills = () => {
    const [data, setdata] = useState([{skill:"",id:0}])
    const [index, setIndex] = useState(1)
    const addCard = () => {
      setdata([...data, { skill:"",id:index }])
      setIndex(index+1)
    }
    const removeCard = () => {
      if(data.length===1) return
      setdata(data.slice(0,data.length-1))
    }
  return (
    <>
    <h1 className='text-lg font-semibold'> Skills</h1>
    <div className="flex flex-wrap gap-2 justify-center">
     {data.map((item)=>{
        return(
        <CardWrapper key={item.id}/>
        )
     })}
    </div>
    <div className="buttons space-x-3">
        <Button className="mt-4" onClick={addCard}>Add More</Button>
        <Button className="mt-4" onClick={removeCard} disabled={data.length===1}>Remove</Button>
    </div>
    </>
  )
}

export default Skills

const CardWrapper=() => {
  return(
    <Card className='w-[40%]'>
        <CardHeader>
          <CardTitle>Add a Skill</CardTitle>
        </CardHeader>
        <CardContent>
          <Input id="skill" type="text" placeholder='eg. Software Development'/>
        </CardContent>
    </Card>
  )
}

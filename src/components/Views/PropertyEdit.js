import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { getAProperty } from '../../api/properties'

const PropertyEdit = ({ user }) => {
  const { id } = useParams()
  const [property, setProperty] = useState({})

  useEffect(() => {
    console.log(id)
    const retrieveProperty = async (user, id) => {
      let res = await getAProperty(user, id)
      let propertyData = res.data.property
      console.log(propertyData)
      // setProperty(propertyData)
    }

    retrieveProperty(user, id)
  })

  return (
    <div>
      <h1>Edit Property</h1>
    </div>
  )
}

export default PropertyEdit
import React, { useEffect, useState } from 'react'

const Properties = () => {
    const [properties, setProperties] = useState(null)

    useEffect(() => {
      console.log('useEffect working')
    }, [])

    return (
        <h1>Properties</h1>
    )
}

export default Properties
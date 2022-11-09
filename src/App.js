import { useState } from 'react'

import { reverse } from './helpers'
import  Title from './Title.js'
import './styles.css'
import NameLength from './NameLength.js'
import NameReversed from './NameReversed.js'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
    <Title name= {name} />
    <NameLength name = {name} nameLength = {name.length} />
    <NameReversed name = {name} nameReversed = {reverse(name)} />   
    </div>
  )
}

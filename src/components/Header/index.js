import React from 'react'
import { Header,H1} from './styled'


export default function index(props) {
  return (
    <Header>
      <H1>{props.Nome}</H1>  
    </Header>
  )
}

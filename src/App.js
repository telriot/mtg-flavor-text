import React from "react"
import Card from "./components/Card"
import styled from "styled-components"

const Container = styled.div`
  max-width: 500px;
  text-align: center;
  margin: auto;
  border: 3px solid teal;
  border-radius: 4px;
`
const Title = styled.h1`
  color: teal;
`

const App = () => {
  return (
    <Container>
      <Title>Random Card Flavors</Title>
      <Card />
    </Container>
  )
}

export default App

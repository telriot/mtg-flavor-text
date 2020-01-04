import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const Button = styled.button`
  color: teal;
  background-color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid teal;
  border-radius: 3px;
`
const CardText = styled.p`
  font-size: 1.2em;
  margin: auto 20px;
`
function Card() {
  const [card, setCard] = useState("")
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const URL = "https://api.scryfall.com/cards/random?q=ft:\\w"

  useEffect(() => {
    async function fetchRandomCard() {
      setIsLoading(true)

      try {
        const response = await axios.get(URL)
        console.log(response.data.flavor_text)
        setCard(response.data)
      } catch (error) {
        if (axios.isCancel(error)) {
          //request cancelled
        } else {
          throw error
        }
      }
      setIsLoading(false)
    }
    fetchRandomCard()
  }, [count])

  return (
    <div>
      <CardText>
        {isLoading === true
          ? "Looking for a random quote..."
          : card.flavor_text}
      </CardText>
      <Button onClick={() => setCount(count + 1)}>Get another card</Button>
    </div>
  )
}

export default Card

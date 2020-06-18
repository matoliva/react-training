import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #cbdadb;
`
const Hello = styled.h1`
  font-size: 80px;
  color: #FFF;
  margin: 10px;
  padding: 20px 40px;
  border: 8px solid;
  width: fit-content;
`

const HelloWorld = ({ message }) => (
  <Container>
    <Hello>
      { message }
    </Hello>
  </Container>
)

export default HelloWorld
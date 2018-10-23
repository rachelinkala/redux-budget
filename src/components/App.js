import React from 'react'
import styled from 'styled-components'
import Ledger from './Ledger'
import WishList from './Wishlist'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const App = () => (
  <Container>
    <Ledger />
    <WishList />
  </Container>
)

export default () => <div></div>

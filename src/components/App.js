import React from 'react'
import styled from 'styled-components'
import Ledger from './Ledger'
import WishList from './Wishlist'
import LedgerForm from './WishListForm'
import WishListForm from './WishListForm'
import { Flex } from './Shared'


const App = () => (
  <div>
    <Flex alignItems="stretch">
      <LedgerForm />
      <WishListForm />
    </Flex>
    <Flex justifyContent="space-around">
      <Ledger />
      <WishList />
    </Flex>
  </div>
)

export default () => <div></div>

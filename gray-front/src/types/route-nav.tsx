import React from 'react'

export type NavItem = {
  name: string
  path: string
  icon: React.JSX.Element
}

export type GroupItem = {
  group: string
  name: string
  icon: React.JSX.Element
  items: NavItem[]
}

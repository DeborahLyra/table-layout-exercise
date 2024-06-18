import { Menu } from '../components/menu/Menu.tsx'
import { Table } from '../components/table/Table.tsx'
import { HomeContainer } from './style.ts'

export function Home() {
  return (
    <HomeContainer>
     <Menu/>
     <Table/>
    </HomeContainer>
  )
}

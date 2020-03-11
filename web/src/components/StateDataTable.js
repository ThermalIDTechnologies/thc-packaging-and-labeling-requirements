import React from "react"
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

import { useStateData } from "./hooks/useStateData"
import { StyledTable } from "./styles/StyledDataTable"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const StateDataTable = () => (
    <StyledTable>
      <Thead>
        <Tr>
          <Th>State</Th>
          <Th>Recreational</Th>
          <Th>Medical</Th>
          <Th>CBD/Low THC</Th>
        </Tr>
      </Thead>
      <Tbody>
        {useStateData().map(stateData => {
          return (
            <Tr key={stateData.sanityId}>
              <Td>{stateData.state}</Td>
              <Td>{stateData.recreationalStatus}</Td>
              <Td>{stateData.medicalStatus}</Td>
              <Td>{stateData.cbdStatus}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </StyledTable>
  )

export default StateDataTable

//Alphabetical sort function

// const sortedStateData = () => {
//   function compare(a, b) {
//     const bandA = a.state.toUpperCase()
//     const bandB = b.state.toUpperCase()

//     let comparison = 0
//     if (bandA > bandB) {
//       comparison = 1
//     } else if (bandA < bandB) {
//       comparison = -1
//     }
//     return comparison
//   }

//   return [...statesLegality].sort(compare)
// }

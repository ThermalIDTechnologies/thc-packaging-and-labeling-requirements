import { useStaticQuery, graphql } from "gatsby"

export const useStateData = () => {
  const { allSanityStateCannabisInfo } = useStaticQuery(
    graphql`
      query StateDataQuery {
        allSanityStateCannabisInfo(sort: {order: ASC, fields: state}) {
          nodes {
            cbdStatus
            color
            sanityId
            recreationalStatus
            medicalStatus
            state
            _createdAt
          }
        }
      }
    `
  )
  return allSanityStateCannabisInfo.nodes
}

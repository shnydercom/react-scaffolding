import React from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '../gql'
import SingleStudy from '../atoms/SingleStudy'
 
const allStudiesQueryDocument = graphql(/* GraphQL */ `
	query getAllMedicalStudies {
		medicalStudies {
			name
			status
		}
	}
`)
 
export function AllStudiesList() {
  // `data` is typed!
  const { data, loading } = useQuery(allStudiesQueryDocument, /* { variables: { first: 10 } }*/)
  const isEmptyState = !data || !data.medicalStudies || data.medicalStudies.length == 0;
	return (
    <div className="all-Studies">
			<h3>All Studies</h3>
			{loading && <div>...loading</div>}
			{!loading && isEmptyState && <div>no data for Studies found</div>}
      {data && <ul>{data.medicalStudies?.map((e, i) => e && <SingleStudy name={e?.name ?? "unknown"} key={`Study-${i}`} />)}</ul>}
    </div>
  )
}
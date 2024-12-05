import React from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '../gql'
import SingleDrug from '../atoms/SingleDrug'
 
const allDrugsQueryDocument = graphql(/* GraphQL */ `
	query getAllDrugsQuery {
		drugs {
			alcoholWarning
			dosageForm
			foodWarning
			name
		}
	}
`)
 
export function AllDrugsList() {
  // `data` is typed!
  const { data, loading } = useQuery(allDrugsQueryDocument, /* { variables: { first: 10 } }*/)
  const isEmptyState = !data || !data.drugs || data.drugs.length == 0;
	return (
    <div className="all-drugs">
			<h3>All drugs</h3>
			{loading && <div>...loading</div>}
			{!loading && isEmptyState && <div>no data for drugs found</div>}
      {data && <ul>{data.drugs?.map((e, i) => e && <SingleDrug name={e?.name ?? "unknown"} key={`drug-${i}`} />)}</ul>}
    </div>
  )
}
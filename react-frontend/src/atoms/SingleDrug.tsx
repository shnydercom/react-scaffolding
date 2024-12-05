import { FunctionComponent } from "react";

interface SingleDrugProps {
	name: string
}
 
const SingleDrug: FunctionComponent<SingleDrugProps> = ({name}) => {
	return ( <li>
		{name}
	</li>);
}
 
export default SingleDrug;
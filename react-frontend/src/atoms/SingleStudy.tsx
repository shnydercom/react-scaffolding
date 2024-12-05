import { FunctionComponent } from "react";

interface SingleStudyProps {
	name: string
}
 
const SingleStudy: FunctionComponent<SingleStudyProps> = ({name}) => {
	return ( <li>
		{name}
	</li>);
}
 
export default SingleStudy;
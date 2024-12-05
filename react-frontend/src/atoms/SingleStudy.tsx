import { FunctionComponent } from "react";

interface SingleStudyProps {
	name: string
}
 
const SingleStudy: FunctionComponent<SingleStudyProps> = ({name}) => {
	return ( <li>
		{`Title: "${name}"`}
	</li>);
}
 
export default SingleStudy;
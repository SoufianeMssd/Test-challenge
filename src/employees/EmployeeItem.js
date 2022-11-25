import React from "react";
import {loadData, STATUS} from "../utils";

import memberJsonData from "../members.json";
import { Row } from "../style/default";

const statusIs = (empl) => {
    if(!empl.confirmedAt && !empl.rejectedAt) return STATUS.REQUESTED
    if(empl.confirmedAt) return STATUS.CONFIRMED
    return STATUS.REJECTED
}

const nameIs = (userId) => {
   const members = loadData(memberJsonData);
   return members.find(item => item.userId === userId).name; 
}


const EmployeeItem = ({ empl }) => {
    return (<div key={empl.id} style={{ "display": "flex", "marginTop": "20px" }}>
        <Row>{nameIs(empl.userId)}</Row>
        <Row>{empl.type}</Row>
        <Row>{`${empl.startDate} :: ${empl.endDate}`}</Row>
        <Row>{empl.memberNote}</Row>
        <Row>{statusIs(empl)}</Row>
        <Row>{empl.admitterNote}</Row>
    </div>)
}
export default EmployeeItem;
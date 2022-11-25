import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilterWrap, PaginationWrap } from "../style/default";
import { TYPE, All_Absences_DATA } from "../utils";
import EmployeeItem from "./EmployeeItem";

const PAGE_SIZE = 10;

const EmployeeList = () => {
    const [data, setData] = useState(All_Absences_DATA);
    const [type, setType] = useState("");
    const [page, setPage] = useState(0);

    useEffect(() => {
        if(type)
            setData(All_Absences_DATA.filter(item => item.type === type)
            .slice(page*PAGE_SIZE, (page + 1)*PAGE_SIZE));
        else 
            setData(All_Absences_DATA.slice(page*PAGE_SIZE, (page + 1)*PAGE_SIZE)); 
    }, [type, page])

    const lengthDataByType = () => All_Absences_DATA.filter(item => type ? item.type === type : true).length;

    return (<>
        <div style={{ "color": "green" }}>Total Number of absences : {All_Absences_DATA.length}</div>
        <FilterWrap>
            <div style={{ "display": "flex", "marginLeft": "5px" }}>
                <div>Type : </div>
                <select 
                    style={{ "fontSize": "10px", "marginLeft": "5px" }}
                    onChange={(e, page) => {
                        setType(e.target.value);
                        setPage(0);
                    }}
                >
                    <option value={""} />
                    <option value={TYPE.SICKNESS}>{TYPE.SICKNESS}</option>
                    <option value={TYPE.VACATION}>{TYPE.VACATION}</option>
                </select>
            </div>
            <div style={{ "display": "flex", "marginLeft": "20px" }}>
                <div>Date : </div>
            </div>
        </FilterWrap>
        {data.map(item => <EmployeeItem key={item.id} empl={item} />)}
        <PaginationWrap> 
            <Pagination
                count={parseInt(lengthDataByType()/10)+1}
                variant="outlined"
                color="primary"
                onChange={(e, p) => setPage(p-1)}
            />
        </PaginationWrap>
    </>)
}

export default EmployeeList
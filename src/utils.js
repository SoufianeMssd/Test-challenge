
import absenceJsonData from "./absences.json";

export const STATUS = {
    CONFIRMED: "CONFIRMED",
    REJECTED: "REJECTED",
    REQUESTED: "REQUESTED"
};

export const TYPE = {
    SICKNESS: "sickness",
    VACATION: "vacation"
}
export const loadData = (jsonData) => JSON.parse(JSON.stringify(jsonData)).payload;

export const All_Absences_DATA = loadData(absenceJsonData);
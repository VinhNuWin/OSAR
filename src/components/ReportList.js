import { useFetchReportQuery } from "../store";

function ReportList({ reporter }) {
    const { data, error, isLoading } = useFetchReportQuery();

    const results = useFetchReportQuery(reporter);

    console.log(data, error, isLoading);

    return <div> Incidents for {reporter}</div>
}

export default ReportList;
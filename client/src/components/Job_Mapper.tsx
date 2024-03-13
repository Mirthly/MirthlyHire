
const Job_Mapper = ({job}) =>{
    return(
        <div className="flex flex-col gap-2 border-2 p-4 rounded-xl border-black cursor-pointer h-full"> 
            <div className="text-xl font-bold">{job.RoleName}</div>
            <div>{job.CompanyName}</div>
            <div>Experience : {job.Experience} years</div>
            <div>Salary : {job.salary}</div>
        </div>
    )
}

export default Job_Mapper
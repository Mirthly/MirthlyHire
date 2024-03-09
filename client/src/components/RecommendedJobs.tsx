import Job_pop_up from "./Job_pop_up";

const RecommendedJobs = () => {
  return (
    <>
      <div className='flex flex-col px-12'>
        <div className='flex justify-between'>
          <div>
            <div className='flex gap-10 p-4'>
              <div className="text-xl">Recommended Jobs</div>
              <div className="bg-black rounded-full text-white px-2 pb-[2px] flex justify-center items-center">153</div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {data.map((job,index)=>{
            return(
              <div className="flex flex-col gap-2 border-2 p-4 rounded-xl border-black cursor-pointer" key={index} onClick={()=>{
                return(
                  <div>
                    <Job_pop_up/>
                  </div>                )
              }}>
                <div className="text-xl font-bold">{job.RoleName}</div>
                <div>{job.CompanyName}</div>
                <div>Experience : {job.Experience} years</div>
                <div>Salary : {job.salary}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default RecommendedJobs;


const data = [{
  CompanyName:"Google",
  RoleName:"Senior Full Stack Engineer",
  Experience:"5+",
  Area:"Seatle",
  salary:"$200000-$250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
},{
  CompanyName:"Google",
  RoleName:"Senior Full Stack Engineer",
  Experience:"5+",
  Area:"Seatle",
  salary:"$200000-$250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
},{
  CompanyName:"Google",
  RoleName:"Senior Full Stack Engineer",
  Experience:"5+",
  Area:"Seatle",
  salary:"$200000-$250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
},{
  CompanyName:"Google",
  RoleName:"Senior Full Stack Engineer",
  Experience:"5+",
  Area:"Seatle",
  salary:"$200000-$250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
},{
  CompanyName:"Google",
  RoleName:"Senior Full Stack Engineer",
  Experience:"5+",
  Area:"Seatle",
  salary:"$200000-$250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
},{
  CompanyName:"Google",
  RoleName:"Senior Full Stack Engineer",
  Experience:"5+",
  Area:"Seatle",
  salary:"$200000-$250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
},{
  CompanyName:"Google",
  RoleName:"Senior Full Stack Engineer",
  Experience:"5+",
  Area:"Seatle",
  salary:"200000-250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
}]
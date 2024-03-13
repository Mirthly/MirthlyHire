import Job_Mapper from "./Job_Mapper";

const RecommendedJobs = () => {
  return (
    <>
      <div className='flex flex-col px-12 border-2 border-blue-500 h-screen'>
        <div className='flex justify-between'>
          <div>
            <div className='flex gap-10 p-4'>
              <div className="text-xl">Recommended Jobs</div>
              <div className="bg-black rounded-full text-white px-2 pb-[2px] flex justify-center items-center">153</div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4 border-2 border-red-500 h-fit relative'>
          {data.map((job,index)=>{
            return(
              <div key={index}><Job_Mapper job={job}/></div>
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
  salary:"$200000-$250000",
  Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, felis vitae mollis luctus, mauris ante laoreet magna, vel molestie augue metus vel est. Proin ac lobortis nisi, non blandit ex. Curabitur lacinia mauris non mi consequat maximus. Integer suscipit sem id blandit blandit. Donec varius in augue venenatis suscipit. Praesent in congue est, non euismod eros. Maecenas tincidunt vel nisi a bibendum. Maecenas ipsum purus, lobortis a scelerisque nec, dapibus id dolor. "
}]
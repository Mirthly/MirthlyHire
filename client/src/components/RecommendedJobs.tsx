const RecommendedJobs = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <div className='flex gap-10'>
              <div>Recommended Jobs</div>
              <div>386</div>
            </div>
          </div>
          <div className='flex'>
            <div>Sort By</div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4'>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </div>
      </div>
    </>
  );
};

export default RecommendedJobs;

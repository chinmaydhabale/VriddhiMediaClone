import React from 'react'

const AnalyticalData = () => {
    return (
        <div className='mt-24 w-full flex justify-center'>
            <div className='text-blue-800 w-2/3'>
                <div>
                    <h1 className='text-xl font-bold text-center text-blue-800'>The Difference We've Made So Far</h1>
                </div>
                <div className='grid grid-cols-4 gap-4 mt-12'>
                    <div className='flex flex-col gap-4 p-4 text-center'>
                        <div className='text-3xl'>
                            50K+
                        </div>
                        <div>
                            average Impressions/per week/per brand
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 text-center'>
                        <div className='text-3xl'>
                            15%
                        </div>
                        <div>
                            Avg. Increase in sales within 3 months of our content service.
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 text-center'>
                        <div className='text-3xl'>
                            30%
                        </div>
                        <div>
                            Better engagement on personal accounts within 2 months
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 text-center'>
                        <div className='text-3xl'>
                            20+
                        </div>
                        <div>
                            Business Impacted so far
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticalData
export default function StepperItem() {
    return (
        <div data-hs-stepper>
            <ul className='relative flex flex-row gap-x-2'>
                <li
                    className='active group flex flex-1 shrink basis-0 items-center gap-x-2'
                    data-hs-stepper-nav-item='{
            "index": 1,
            "isOptional": true
          }'>
                    <span className='group inline-flex min-h-[28px] min-w-[28px] items-center align-middle text-xs focus:outline-none disabled:pointer-events-none disabled:opacity-50'>
                        <span className='flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600'>
                            <span className='hs-stepper-success:hidden hs-stepper-completed:hidden'>1</span>
                            <svg
                                className='hidden h-3 w-3 flex-shrink-0 hs-stepper-success:block'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'>
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span className='ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400'>
                            Step
                        </span>
                    </span>
                    <div className='h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-blue-500'></div>
                </li>

                <li
                    className='group flex flex-1 shrink basis-0 items-center gap-x-2'
                    data-hs-stepper-nav-item='{
          "index": 2,
          "isOptional": true
        }'>
                    <span className='group inline-flex min-h-[28px] min-w-[28px] items-center align-middle text-xs focus:outline-none disabled:pointer-events-none disabled:opacity-50'>
                        <span className='flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600'>
                            <span className='hs-stepper-success:hidden hs-stepper-completed:hidden'>2</span>
                            <svg
                                className='hidden h-3 w-3 flex-shrink-0 hs-stepper-success:block'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'>
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span className='ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400'>
                            Step
                        </span>
                    </span>
                    <div className='h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-gray-700'></div>
                </li>

                <li
                    className='group flex flex-1 shrink basis-0 items-center gap-x-2'
                    data-hs-stepper-nav-item='{
          "index": 3
        }'>
                    <span className='group inline-flex min-h-[28px] min-w-[28px] items-center align-middle text-xs focus:outline-none disabled:pointer-events-none disabled:opacity-50'>
                        <span className='flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600'>
                            <span className='hs-stepper-success:hidden hs-stepper-completed:hidden'>3</span>
                            <svg
                                className='hidden h-3 w-3 flex-shrink-0 hs-stepper-success:block'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'>
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span className='ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400'>
                            Step
                        </span>
                    </span>
                    <div className='h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-gray-700'></div>
                </li>
            </ul>

            <div className='mt-5 sm:mt-8'>
                <div
                    data-hs-stepper-content-item='{
            "index": 1
          }'
                    style={{ display: 'none' }}>
                    <div className='flex h-48 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800'>
                        <h3 className='text-gray-500'>First content</h3>
                    </div>
                </div>

                <div
                    data-hs-stepper-content-item='{
            "index": 2
          }'
                    style={{ display: 'none' }}>
                    <div className='flex h-48 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800'>
                        <h3 className='text-gray-500'>Second content</h3>
                    </div>
                </div>

                <div
                    data-hs-stepper-content-item='{
            "index": 3
          }'
                    style={{ display: 'none' }}>
                    <div className='flex h-48 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800'>
                        <h3 className='text-gray-500'>Third content</h3>
                    </div>
                </div>

                <div
                    data-hs-stepper-content-item='{
            "isFinal": true
          }'>
                    <div className='flex h-48 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4'>
                        <h3 className='text-gray-500'>Final content</h3>
                    </div>
                </div>

                <div className='mt-5 flex items-center justify-between gap-x-2'>
                    <button
                        type='button'
                        className='inline-flex items-center gap-x-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50'
                        data-hs-stepper-back-btn>
                        <svg
                            className='h-4 w-4 flex-shrink-0'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path d='m15 18-6-6 6-6' />
                        </svg>
                        Back
                    </button>
                    <button
                        type='button'
                        className='inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
                        data-hs-stepper-skip-btn
                        style={{ display: 'none' }}>
                        Skip
                    </button>
                    <button
                        type='button'
                        className='inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
                        data-hs-stepper-next-btn>
                        Next
                        <svg
                            className='h-4 w-4 flex-shrink-0'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path d='m9 18 6-6-6-6' />
                        </svg>
                    </button>
                    <button
                        type='button'
                        className='inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
                        data-hs-stepper-finish-btn
                        style={{ display: 'none' }}>
                        Finish
                    </button>
                    <button
                        type='reset'
                        className='inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
                        data-hs-stepper-reset-btn
                        style={{ display: 'none' }}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

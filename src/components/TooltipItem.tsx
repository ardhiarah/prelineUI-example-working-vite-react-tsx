export default function TooltipItem() {
    return (
        <div className='mx-auto grid max-w-[15rem] grid-cols-3 gap-x-2 gap-y-4'>
            <div className='col-start-2 text-center'>
                <div className='hs-tooltip inline-block'>
                    <button
                        type='button'
                        className='hs-tooltip-toggle inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-white/[.1] dark:hover:bg-white/[.05] dark:hover:text-white'>
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
                            <path d='m18 15-6-6-6 6' />
                        </svg>
                        <span
                            className='hs-tooltip-content invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700'
                            role='tooltip'>
                            Tooltip on top
                        </span>
                    </button>
                </div>
            </div>

            <div className='col-start-1 text-end'>
                <div className='hs-tooltip inline-block [--placement:left]'>
                    <button
                        type='button'
                        className='hs-tooltip-toggle inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-white/[.1] dark:hover:bg-white/[.05] dark:hover:text-white'>
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
                        <span
                            className='hs-tooltip-content invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700'
                            role='tooltip'>
                            Tooltip on left
                        </span>
                    </button>
                </div>
            </div>

            <div className='col-start-3'>
                <div className='hs-tooltip inline-block [--placement:right]'>
                    <button
                        type='button'
                        className='hs-tooltip-toggle inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-white/[.1] dark:hover:bg-white/[.05] dark:hover:text-white'>
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
                        <span
                            className='hs-tooltip-content invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700'
                            role='tooltip'>
                            Tooltip on right
                        </span>
                    </button>
                </div>
            </div>

            <div className='col-start-2 text-center'>
                <div className='hs-tooltip inline-block [--placement:bottom]'>
                    <button
                        type='button'
                        className='hs-tooltip-toggle inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-white/[.1] dark:hover:bg-white/[.05] dark:hover:text-white'>
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
                            <path d='m6 9 6 6 6-6' />
                        </svg>
                        <span
                            className='hs-tooltip-content invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700'
                            role='tooltip'>
                            Tooltip on bottom
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

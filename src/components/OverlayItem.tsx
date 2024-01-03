export default function OverlayItem(props: any) {
    const { contentId, title, content } = props;

    return (
        <>
            <button
                type='button'
                className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                data-hs-overlay={`#${contentId}`}>
                Open offcanvas
            </button>

            <div
                id={contentId}
                className='hs-overlay fixed start-0 top-0 z-[60] hidden h-full w-full w-full max-w-xs -translate-x-full transform border-e bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800'
                tabIndex={-1}>
                <div className='flex items-center justify-between border-b px-4 py-3 dark:border-gray-700'>
                    <h3 className='font-bold text-gray-800 dark:text-white'>{title}</h3>
                    <button
                        type='button'
                        className='flex h-7 w-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        data-hs-overlay={`#${contentId}`}>
                        <span className='sr-only'>Close modal</span>
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
                            <path d='M18 6 6 18' />
                            <path d='m6 6 12 12' />
                        </svg>
                    </button>
                </div>
                <div className='p-4'>
                    <p className='text-gray-800 dark:text-gray-400'>{content}</p>
                </div>
            </div>
        </>
    );
}

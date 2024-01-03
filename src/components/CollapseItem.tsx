export default function CollapseItem(props: any) {
    const { contentId, title, content } = props;

    return (
        <>
            <button
                type='button'
                className='hs-collapse-toggle inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                data-hs-collapse={`#${contentId}`}>
                {title}
                <svg
                    className='h-4 w-4 flex-shrink-0 text-white hs-collapse-open:rotate-180'
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
            </button>
            <div id={contentId} className='hs-collapse hidden w-full overflow-hidden transition-[height] duration-300'>
                <div className='mt-5'>
                    <p className='text-gray-500 dark:text-gray-400'>{content}</p>
                </div>
            </div>
        </>
    );
}

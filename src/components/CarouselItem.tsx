export default function CarouselItem() {
    return (
        <div
            data-hs-carousel='{
        "loadingclassNamees": "opacity-0"
      }'
            className='relative'>
            <div className='hs-carousel relative min-h-[350px] w-full overflow-hidden rounded-lg bg-white'>
                <div className='hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700'>
                    <div className='hs-carousel-slide'>
                        <div className='flex h-full justify-center bg-gray-100 p-6'>
                            <span className='self-center text-4xl transition duration-700'>First slide</span>
                        </div>
                    </div>
                    <div className='hs-carousel-slide'>
                        <div className='flex h-full justify-center bg-gray-200 p-6'>
                            <span className='self-center text-4xl transition duration-700'>Second slide</span>
                        </div>
                    </div>
                    <div className='hs-carousel-slide'>
                        <div className='flex h-full justify-center bg-gray-300 p-6'>
                            <span className='self-center text-4xl transition duration-700'>Third slide</span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                type='button'
                className='hs-carousel-prev hs-carousel:disabled:opacity-50 absolute inset-y-0 start-0 inline-flex h-full w-[46px] items-center justify-center text-gray-800 hover:bg-gray-800/[.1] disabled:pointer-events-none'>
                <span className='text-2xl' aria-hidden='true'>
                    <svg className='h-4 w-4' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                        <path
                            fillRule='evenodd'
                            d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
                        />
                    </svg>
                </span>
                <span className='sr-only'>Previous</span>
            </button>
            <button
                type='button'
                className='hs-carousel-next hs-carousel:disabled:opacity-50 absolute inset-y-0 end-0 inline-flex h-full w-[46px] items-center justify-center text-gray-800 hover:bg-gray-800/[.1] disabled:pointer-events-none'>
                <span className='sr-only'>Next</span>
                <span className='text-2xl' aria-hidden='true'>
                    <svg className='h-4 w-4' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                        <path
                            fillRule='evenodd'
                            d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                        />
                    </svg>
                </span>
            </button>
        </div>
    );
}

export default function ToggleCountItem(props: any) {
    const { groupId } = props;

    return (
        <div>
            <div className='mb-3 flex justify-end'>
                <div id={groupId} className='inline-block rounded-lg bg-gray-100 p-0.5 dark:bg-gray-700'>
                    <label htmlFor={`${groupId}-monthly`} className='relative inline-block px-3 py-2'>
                        <span className='relative z-10 inline-block cursor-pointer text-sm font-medium text-gray-800 dark:text-gray-200'>
                            Monthly
                        </span>
                        <input
                            id={`${groupId}-monthly`}
                            name={groupId}
                            type='radio'
                            className='absolute end-0 top-0 h-full w-full cursor-pointer rounded-lg border-transparent bg-transparent bg-none text-transparent before:absolute before:inset-0 before:h-full before:w-full before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-transparent focus:ring-offset-0 dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent'
                        />
                    </label>
                    <label htmlFor={`${groupId}-annual`} className='relative inline-block px-3 py-2'>
                        <span className='relative z-10 inline-block cursor-pointer text-sm font-medium text-gray-800 dark:text-gray-200'>Annual</span>
                        <input
                            id={`${groupId}-annual`}
                            name={groupId}
                            type='radio'
                            className='absolute end-0 top-0 h-full w-full cursor-pointer rounded-lg border-transparent bg-transparent bg-none text-transparent before:absolute before:inset-0 before:h-full before:w-full before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-transparent focus:ring-offset-0 dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent'
                            defaultChecked
                        />
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-3 rounded-xl border border-gray-200 lg:items-center dark:border-gray-700'>
                <div className='flex flex-col p-4'>
                    <h4 className='mb-1 text-gray-800 dark:text-gray-200'>Startup</h4>
                    <div className='flex gap-x-1'>
                        <span className='text-xl font-normal text-gray-800 dark:text-gray-200'>$</span>
                        <p
                            data-hs-toggle-count={`{
            "target": "#${groupId}",
            "min": 19,
            "max": 29
          }`}
                            className='text-3xl font-semibold text-gray-800 dark:text-gray-200'>
                            19
                        </p>
                    </div>
                </div>

                <div className='flex flex-col p-4'>
                    <div className='flex justify-between'>
                        <h4 className='mb-1 text-gray-800 dark:text-gray-200'>Team</h4>
                    </div>
                    <div className='flex gap-x-1'>
                        <span className='text-xl font-normal text-gray-800 dark:text-gray-200'>$</span>
                        <p
                            data-hs-toggle-count={`{
            "target": "#${groupId}",
            "min": 89,
            "max": 99
          }`}
                            className='text-3xl font-semibold text-gray-800 dark:text-gray-200'>
                            89
                        </p>
                    </div>
                </div>

                <div className='flex flex-col p-4'>
                    <h4 className='mb-1 text-gray-800 dark:text-gray-200'>Enterprise</h4>
                    <div className='flex gap-x-1'>
                        <span className='text-xl font-normal text-gray-800 dark:text-gray-200'>$</span>
                        <p
                            data-hs-toggle-count={`{
            "target": "#${groupId}",
            "min": 129,
            "max": 149
          }`}
                            className='text-3xl font-semibold text-gray-800 dark:text-gray-200'>
                            129
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

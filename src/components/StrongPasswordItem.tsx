export default function StrongPasswordItem() {
    return (
        <div className='max-w-sm'>
            <div className='mb-2 flex'>
                <div className='flex-1'>
                    <input
                        type='password'
                        id='hs-strong-password-with-indicator-and-hint'
                        className='block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                        placeholder='Enter password'
                    />
                    <div
                        id='hs-strong-password'
                        data-hs-strong-password='{
              "target": "#hs-strong-password-with-indicator-and-hint",
              "hints": "#hs-strong-password-hints",
              "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
            }'
                        className='-mx-1 mt-2 flex'></div>
                </div>
            </div>

            <div id='hs-strong-password-hints' className='mb-3'>
                <div>
                    <span className='text-sm text-gray-800 dark:text-gray-200'>Level:</span>
                    <span
                        data-hs-strong-password-hints-weakness-text='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
                        className='text-sm font-semibold text-gray-800 dark:text-gray-200'></span>
                </div>

                <h4 className='my-2 text-sm font-semibold text-gray-800 dark:text-white'>Your password must contain:</h4>

                <ul className='space-y-1 text-sm text-gray-500'>
                    <li
                        data-hs-strong-password-hints-rule-text='min-length'
                        className='flex items-center gap-x-2 hs-strong-password-active:text-teal-500'>
                        <span className='hidden' data-check>
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
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span data-uncheck>
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
                        </span>
                        Minimum number of characters is 6.
                    </li>
                    <li
                        data-hs-strong-password-hints-rule-text='lowercase'
                        className='flex items-center gap-x-2 hs-strong-password-active:text-teal-500'>
                        <span className='hidden' data-check>
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
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span data-uncheck>
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
                        </span>
                        Should contain lowercase.
                    </li>
                    <li
                        data-hs-strong-password-hints-rule-text='uppercase'
                        className='flex items-center gap-x-2 hs-strong-password-active:text-teal-500'>
                        <span className='hidden' data-check>
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
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span data-uncheck>
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
                        </span>
                        Should contain uppercase.
                    </li>
                    <li
                        data-hs-strong-password-hints-rule-text='numbers'
                        className='flex items-center gap-x-2 hs-strong-password-active:text-teal-500'>
                        <span className='hidden' data-check>
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
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span data-uncheck>
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
                        </span>
                        Should contain numbers.
                    </li>
                    <li
                        data-hs-strong-password-hints-rule-text='special-characters'
                        className='flex items-center gap-x-2 hs-strong-password-active:text-teal-500'>
                        <span className='hidden' data-check>
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
                                <polyline points='20 6 9 17 4 12' />
                            </svg>
                        </span>
                        <span data-uncheck>
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
                        </span>
                        Should contain special characters.
                    </li>
                </ul>
            </div>
        </div>
    );
}

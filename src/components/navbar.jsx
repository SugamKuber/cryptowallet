import React from 'react';
import { CloseIcon, MinusIcon, CopyIcon } from '@chakra-ui/icons'

export function Navbar() {
    return (
        <nav class="bg-zinc-800 text-zinc-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="!#" class="flex items-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/004/235/183/original/sr-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg" class="mr-3 h-6" alt="Logo" />
                    <span class="self-center text-xl font-semibold whitespace- ">cySync</span>
                </a>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex   text-zinc-200 flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="!#" class="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><MinusIcon /></a>
                        </li>
                        <li>
                            <a href="!#" class="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><CopyIcon /></a>
                        </li>
                        <li>
                            <a href="!#" class="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><CloseIcon /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

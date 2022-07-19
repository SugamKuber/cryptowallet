import React from "react";
import 'tw-elements';
import { CheckIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { HStack, VStack } from '@chakra-ui/react'
function Recive() {

    return (
        <>
            <label for="my-modal-3" class="btn modal-button">open modal</label>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-semibold text-center">RECEIVE</h3>
                    <div className="">

                        <ol class="items-center sm:flex">
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white  shrink-0">
                                        1</div>
                                    <div class="hidden  w-full bg-gray-200 h-0.5 "></div>
                                </div>
                                <div class="mt-3 sm:pr-8">
                                    <h3 class="text-lg font-semibold text-gray-800 ">Device</h3>
                                    <div>
                                        <p>Follow Instructions on Device</p>
                                        <HStack className="bg-white m-4 p-4 rounded-2xl"><spam class="float-left"><ArrowForwardIcon color='yellow.500' /></spam><spam >Select the Wallet On Device</spam><spam class="float-right"><CheckIcon /></spam></HStack>
                                        <HStack className="bg-white m-4 p-4 rounded-2xl"><spam class="float-left"><ArrowForwardIcon color='yellow.500' /></spam><spam >Select the Coin On Device</spam><spam class="float-right"><CheckIcon /></spam></HStack>
                                        <HStack className="bg-white m-4 p-4 rounded-2xl"><spam class="float-left"><ArrowForwardIcon color='yellow.500' /></spam><spam >Tap 1 Card of any 4 Card</spam><spam class="float-right"><CheckIcon /></spam></HStack>
                                    </div>
                                </div>
                            </li>
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        2</div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                                </div>
                                <div class="mt-3 sm:pr-8">
                                    <h3 class="text-lg font-semibold text-gray-800 ">Verification</h3>
                                    <div>
                                        <VStack>
                                            <div class="bg-slate-400 m-5 p-16 border-dashed border-2 border-yellow-500 ">
                                                25tjkgbjnkergkjb5jkb5jtj
                                            </div>
                                            <p>Verify adress on device</p>
                                            <HStack className="bg-white m-4 p-4 rounded-2xl"><spam class="float-left"><ArrowForwardIcon color='yellow.500' /></spam><spam>Please match the adress to be shown in X1 wallet</spam><spam class="float-right"><CheckIcon /></spam></HStack>                                        </VStack>
                                        <VStack />
                                    </div>
                                </div>
                            </li>
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        3</div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div class="mt-3 sm:pr-8">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Recive</h3>
                                    <div>
                                        <VStack>
                                            <div class="bg-slate-400 m-5 p-8 border-dashed border-2 border-yellow-500 ">
                                                25tjkgbjnkergkjb5jkb5jtj
                                            </div>
                                            <p class="text-blue-500">! address verified</p>
                                            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                                        </VStack>
                                    </div>

                                </div>
                            </li>
                        </ol>

                    </div>
                </div>

            </div>
        </>
    )
}

export { Recive }
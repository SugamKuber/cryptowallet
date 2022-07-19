import React from "react";
import { Switch } from "@chakra-ui/react";
import { Recive } from "./recive";
import { CheckCircleIcon } from "@chakra-ui/icons";

const navigation = [
    {
        name: "Bitcoin",
        img: "https://tinyurl.com/shuf5rtgvybyvtcfgh",
        color: "red",
        price: "3000",
        laptop: "applee",
    },
    {
        name: "Ethereum",
        img: "https://tinyurl.com/brhebjefs",
        color: "red",
        price: "3000",
        laptop: "applee",
    },
    {
        name: "Binance",
        img: "https://tinyurl.com/hehehlogo",
        color: "red",
        price: "3000",
        laptop: "applee",
    },
    {
        name: "Bitcoin",
        img: "https://tinyurl.com/shuf5rtgvybyvtcfgh",
        color: "red",
        price: "3000",
        laptop: "applee",
    },
    {
        name: "Binance",
        img: "https://tinyurl.com/hehehlogo",
        color: "red",
        price: "3000",
        laptop: "applee",
    },
    {
        name: "Bitcoin",
        img: "https://tinyurl.com/shuf5rtgvybyvtcfgh",
        color: "red",
        price: "3000",
        laptop: "applee",
    },
];

class Main extends React.Component {
    render() {
        return (
            <>
                <div>
                    <div className="relative h-10 w-10/12">
                        <div class="absolute top-0 right-0 h-6 grid grid-cols-3 divide-x">
                            <div>
                                <CheckCircleIcon w={15} h={15} /> sync
                            </div>
                            <Switch />
                        </div>
                    </div>
                    <div className="p-6 bg-blue-600">
                        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="py-3 px-6">
                                            Product name
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Color
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Category
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Price
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            <span class="sr-only">Recive</span>
                                        </th>
                                        <th scope="
                                        col" class="py-3 px-6">
                                            <span class="sr-only">Send</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {navigation.map((item) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th
                                                scope="row"
                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                <div class="align-baseline w-5">
                                                    <img src={item.img} alt="img" class="rounded-full "/>{item.name}
                                        
                                                </div>
                                                
                                            </th>
                                            <td class="py-4 px-6">{item.color}</td>
                                            <td class="py-4 px-6">{item.laptop}</td>
                                            <td class="py-4 px-6">{item.price}</td>
                                            <td class="py-4 px-6">
                                                <a
                                                    href="!#"
                                                    class="font-medium"
                                                >
                                                    <Recive/>
                                                </a>
                                            </td>
                                            <td class="py-4 px-6 ">
                                                <a
                                                    href="!#"
                                                    class="font-medium"
                                                >
                                                    Send
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export { Main };

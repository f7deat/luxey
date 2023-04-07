import SimpleHeader from "@/components/header/simple";
import { MagnifyingGlassIcon } from "@/icons";
import { Row, Col, Anchor } from "antd";
import Head from "next/head";
import { Playfair_Display, Inter } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Ranking() {

    function getBags() {
        const bags = [];
        for (let index = 1; index < 20; index++) {
            bags.push({
                key: 'part-' + index,
                href: '#part-' + index,
                title: index
            })
        }
        return bags;
    }

    return (
        <>
            <Head>
                <title>Ranking</title>
                <meta name="description" content="Ranking" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SimpleHeader />
            <main className="md:p-10 px-4">
                <Row gutter={16}>
                    <Col md={6} xs={4}>
                        <div className="mb-10 md:text-4xl">
                            <div className={playfairDisplay.className}>Hermes bag</div>
                            <div className={playfairDisplay.className}>ranking</div>
                        </div>
                        <Anchor
                            items={getBags()}
                        />
                    </Col>
                    <Col md={12} xs={20}>
                        <div className="flex justify-end mb-20">
                            <div className="border-b border-gray-500 flex items-center py-2">
                                <MagnifyingGlassIcon className="mr-4 text-gray-400" />
                                <div className={inter.className}>
                                    <input type="text" value="hermes birkin" className="md:w-96 md:text-xl" />
                                </div>
                            </div>
                        </div>
                        {
                            getBags().map(bag => (
                                <div key={bag.key} id={bag.key}>
                                    <div className="flex mb-10 md:gap-10 gap-4">
                                        <div className="md:h-40 md:w-52 w-32 h-32 bg-gray-500">

                                        </div>
                                        <div className="flex-grow">
                                            <div className="md:text-2xl text-gray-500">{bag.title}</div>
                                            <div className="md:text-2xl">
                                                <div className={playfairDisplay.className}>
                                                    Hermes Birkin HSS 35 Bag Bordeaux Porosus Crocodile Gold Hardware
                                                </div>
                                            </div>
                                            <div className="mb-6">$ 99,775.00</div>
                                            <div className="">
                                                View detail
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </main>
        </>
    )
}
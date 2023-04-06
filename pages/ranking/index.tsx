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
            <main className="p-10">
                <Row gutter={16}>
                    <Col md={6}>
                        <div className="mb-10 text-4xl">
                            <div className={playfairDisplay.className}>Hermes bag</div>
                            <div className={playfairDisplay.className}>ranking</div>
                        </div>
                        <Anchor
                            items={getBags()}
                        />
                    </Col>
                    <Col md={12}>
                        <div className="flex justify-end mb-20">
                            <div className="border-b border-gray-500 flex items-center py-2">
                                <MagnifyingGlassIcon className="mr-4 text-gray-400" />
                                <div className={inter.className}>
                                    <input type="text" value="hermes birkin" className="w-96 text-xl" />
                                </div>
                            </div>
                        </div>
                        {
                            getBags().map(bag => (
                                <div key={bag.key} id={bag.key}>
                                    <div className="flex mb-10 gap-10">
                                        <div className="h-40 w-52 bg-gray-500">

                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-2xl text-gray-500">{bag.title}</div>
                                            <div className="text-2xl">
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
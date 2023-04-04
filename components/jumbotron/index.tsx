const Jumbotron: React.FC = () => {
    return (
        <div>
            <div className="relative h-96 bg-gray-500">
                <div className="absolute bg-white p-6 max-w-lg" style={{
                    left: '5%',
                    top: '10%'
                }}>
                    <div className="text-3xl font-medium mb-8">
                        <span className="border-b-2 border-yellow-500 py-3">
                            Hermès Bags
                        </span>
                    </div>
                    <div>
                        <div className="mb-4">
                            Find your next Hermès bag or accessory from our curated selection. Shop and discover your next Birkin bag, modern or vintage Kelly bag or add another Hermès scarf to your collection. Plus, browse more styles like the Hermès Bolide and Hermès Garden Party.
                        </div>
                        <div>
                            <a href="#" className="text-blue-500">Learn More About Hermès Bags</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
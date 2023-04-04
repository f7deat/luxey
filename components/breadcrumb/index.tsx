const Breadcrumb: React.FC = () => {
    return (
        <div className="mb-4">
            <ul className="flex gap-2 text-gray-500">
                <li>Shop All</li>
                <li>/</li>
                <li>Fashion</li>
                <li>/</li>
                <li>Handbag</li>
                <li>/</li>
                <li className="text-gray-900">Hermes</li>
            </ul>
        </div>
    )
}

export default Breadcrumb
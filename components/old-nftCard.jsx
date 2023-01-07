export const NFTCard = ({ nft }) => {
    return (
        <div className="w-1/4 grid grid-cols-10">
            <div className="rounded-sm">
                <img className="object-cover h-100 w-full rounded-t-sm" src={nft.media[0].gateway}>
                </img>
            </div>
            {/* <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-mid h-100">
                <div className="">
                    {/* <h2 className="text-xl text-gray-800">
                        {nft.title}
                    </h2> */}
                    {/* <p className="text-gray-600">
                        ID: {nft.id.tokenId}
                    </p>
                    <p className="text-gray-600">
                        {nft.contract.address}
                    </p> */}
                </div>
                {/* <div className="flex-grow mt-2">
                    <p className="text-gray-600">
                        {nft.description}
                    </p>
                </div> */}
            </div> */}
        </div>
    )
}
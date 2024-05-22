import React from 'react';

const ItemDetail = (props) => {
    const { data: itemDetail, setSelectItemDetail, setSelectImage, selectItemDetail } = props;

    const handleChange = () => {
        setSelectItemDetail(itemDetail);
        setSelectImage(Math.floor(Math.random() * 3))

        // console.log('Selected Item Detail:', itemDetail); // Debugging line
    };

    const isSelected = selectItemDetail?.id === itemDetail?.id;

    return (
        <div
            className={`block bg-[#f3f4f6] pt-[5px] pb-[5px] pl-[10px] pr-[10px] border rounded-[10px] relative overflow-hidden z-1 before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:z-2 hover:before:top-0 before:ease-in-out hover:shadow-[0px_0px_9px_1px_#add8e6] ${isSelected ? 'bg-white shadow-[0px_0px_9px_1px_#add8e6]' : ''}`}
            onClick={handleChange}
        >
            <div className="relative items-center w-full z-3 text-sm">
                {
                    itemDetail?.color && <div>
                        Màu sắc: <span className='font-bold'> {itemDetail.color} </span>
                    </div>
                }
                {
                    itemDetail?.diskSize && <div>
                        Dung lượng: <span className='font-bold'> {itemDetail.diskSize} </span>
                    </div>
                }
                {
                    itemDetail?.ram && <div>
                        Ram: <span className='font-bold'> {itemDetail.ram} </span>
                    </div>
                }
                {
                    itemDetail?.screenSize && <div>
                        Màn hình: <span className='font-bold'> {itemDetail.screenSize} </span>
                    </div>
                }
            </div>
        </div>
    );
};

export default ItemDetail;
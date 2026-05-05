import type { Product } from "../../../types/types";
import { PriceFormatter } from "../../../utils/PriceFormatter";

function ProductDetailImgCard({ product }: { product: Product | null }) {
    return (
        <div className=" flex justify-center items-center w-full h-full bg-white rounded-2xl ">
            {product ?
                (<article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                    <img alt="" src="https://picsum.photos/500/500" />
                    <div className="bg-white p-4 sm:p-6">
                        <div className="mt-3">
                            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                {product.name}
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">{PriceFormatter(product.price)}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1">
                            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
                                Tipo de Produto
                            </span>

                            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
                                Marca
                            </span>
                        </div>
                    </div>


                </article>

                )
                : (<div className=""> 
                    <p className="  overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg p-3 text-gray-500 text-center">
                    Selecione um produto para ver os detalhes.
                </p></div>)}
        </div>
    )

}

export default ProductDetailImgCard;
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Filter from "../../../components/ui/Filter";
import Loading from "../../../components/ui/Loading";
import Pagination from "../../../components/ui/Pagination";
import SearchInput from "../../../components/ui/SearchInput";
import type { Product } from "../../../types/types";
import ProductDetailImgCard from "../components/ProductDetailImgCard";
import ProductList from "../components/ProductList";
import { productsQuery } from "../queries/productsQuery";

function ProductPage() {
    const { data, isPending, isError } = useQuery(productsQuery());
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectPag, setSelectPag] = useState<number>(1);
    const [search, setSearch] = useState('');
    const pageLength = 10;

    if (isPending) {
        return <div className="flex justify-center items-center h-screen ">
            <Loading />
        </div>
    };
    if (isError) {
        return <div className="flex justify-center items-center h-screen mt-4 font-medium text-gray-700">
            <h1>Erro ao carregar dados...</h1>
        </div>
    };

    const filteredProducts: Product[] = data?.filter((p: Product) => {
        return (
            p.name.toLowerCase().includes(search.toLowerCase())
        );
    });
    const paginationProducts = filteredProducts.slice((selectPag - 1) * pageLength, pageLength * (selectPag));
    const dataLength = filteredProducts.length;
    return (
        <div className="container grid grid-cols-6 h-80 gap-5">
            <div className="flex flex-col  col-span-4  shadow-md">
                <div className=" gap-4 pt-3 pl-3">
                    <div className="flex gap-2 align-middle">
                        <h3 className="text-lg font-medium text-gray-900 ">Produtos</h3>
                        <button className="-ml-px border border-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50">
                        +
                    </button>
                    </div>
                    
                    
                    <div className="flex justify-start flex-row-reverse gap-5  mr-3">
                        <SearchInput msg="nome ou codigo..." search={search} setSearch={setSearch} />
                        <Filter />

                    </div>
                </div>
                <div className="grow ">
                    <ProductList products={paginationProducts}
                        onSelect={setSelectedProduct}
                        selectedProduct={selectedProduct}
                        onChange={setSearch} />
                </div>

                <div className="m-4"><Pagination dataLength={dataLength} pageLength={pageLength} selectedPage={selectPag} setSelectedPage={setSelectPag} /></div>
            </div>
            <div className="col-span-2">
                <ProductDetailImgCard product={selectedProduct} />
            </div>

        </div>
    );
}

export default ProductPage;
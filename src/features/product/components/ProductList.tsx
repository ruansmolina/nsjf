import ButtonsGroup from "../../../components/ui/ButtonsGroup";
import type { Product } from "../../../types/types";
import { PriceFormatter } from "../../../utils/PriceFormatter";

interface ProductListProps {
  products: Product[] | undefined;
  selectedProduct: Product | null;
  onSelect: (product: Product) => void;
  onChange: (string: string) => void;
}
export default function ProductList({ products, selectedProduct, onSelect, onChange }: ProductListProps) {
  const tcolunms: string[] = ['ID','Nome', 'Preço', '']
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed divide-y-3 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:font-medium *:text-gray-900">
            {tcolunms.map(col => <th className={`py-1 whitespace-nowrap ${col=='ID'?'text-center':''} ${col === '' ? 'w-40' : ''}`}>{col}</th>)}
          </tr>
        </thead>

        <tbody className="divide-y-3 divide-gray-200 *:even:bg-gray-50">
          {products && products?.length > 0 ? products?.map((prod)=>{
            return <tr key={prod.id} className="*:text-gray-900 *:first:font-medium">
            <td className=" py-0.5 text-center font-light whitespace-nowrap">{prod.id}</td>
            <td className=" py-0.5 whitespace-nowrap">{prod.name}</td>
            <td className=" py-0.5 whitespace-nowrap">{PriceFormatter(prod.price)}</td>
            <td className=" py-0.5 whitespace-nowrap"><ButtonsGroup selected={prod} onClickView={onSelect}/></td>
          </tr>
          }):<tr className="*:text-gray-900 *:first:font-medium"><td
        colSpan={4}
        className=" py-4 text-center text-gray-500"
      >
        Nenhum produto encontrado
      </td></tr>}
          

        </tbody>
      </table>
    </div>
  );
}
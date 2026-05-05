interface PaginationProps {
    dataLength: number;
    pageLength: number;
    selectedPage: number;
    setSelectedPage: (page: number) => void;

}
function Pagination({ dataLength, pageLength, selectedPage, setSelectedPage }: PaginationProps) {
    const isFirstPage = selectedPage === 1;
    const totalPages = Math.ceil(dataLength / pageLength);
    const isLastPage = selectedPage === totalPages;
    const generateList = () => {
        const arr = [];
        for (let index = 1; index <= totalPages; index++) {
            arr.push(index == selectedPage ?
                <li className="block size-8 rounded border border-indigo-600 bg-indigo-600 text-center text-sm/8 font-medium text-white">
                    {index}
                </li> :
                <li>
                    <a href="#" onClick={() => setSelectedPage(index)} className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50">
                        {index}
                    </a>
                </li>)

        }
        return arr;

    }
    return (<ul className="flex justify-center gap-1 text-gray-900">
        <li>
            <button
                disabled={isFirstPage}
                onClick={() => !isFirstPage && setSelectedPage(selectedPage - 1)}
                className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors
      ${isFirstPage
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "hover:bg-gray-50"}
    `}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
            </button>
        </li>
        {generateList()}
        <li>
            <button
                disabled={isLastPage}
                onClick={() => !isLastPage && setSelectedPage(selectedPage + 1)}
                className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors
      ${isLastPage
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "hover:bg-gray-50"}
    `}
            ><svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg></button>


        </li>
    </ul>);
}

export default Pagination;
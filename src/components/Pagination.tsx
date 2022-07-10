interface PaginationProps {
    currentPage: number
    toFirstPage: any
    toPrevPage: any
    toNextPage: any
    toLastPage: any
    totalPages: number
    clickPage: any
}

export function Pagination({ currentPage, toFirstPage, toPrevPage, toNextPage, toLastPage, totalPages, clickPage}: PaginationProps) {

    const maxPages = 7

    const maxPagesLeft = (maxPages - 1) / 2

    const firstPage = Math.max(currentPage - maxPagesLeft, 1)

    return(
        <div className="flex justify-center items-center my-5 gap-3">
            <button
                className="bg-zinc-200 py-1 px-2 rounded-sm disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={toFirstPage}>
                    Primeira
            </button>
            <button
                className="bg-zinc-200 py-1 px-2 rounded-sm disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={toPrevPage}>
                    Anterior
            </button>
            {Array.from({ length: Math.min(maxPages, totalPages) })
            .map((_,index) => currentPage <= totalPages - 4 ? (index) + firstPage : (index) + Math.max(totalPages - (maxPages - 1), 1))
            .map((page) => (
                <button
                    className={`${page === currentPage ? "bg-zinc-400" : ''} w-9 flex justify-center px-3 bg-white text-zinc-700 border border-zinc-300`}
                    value={page}
                    key={page}
                    onClick={clickPage}>{page}
                </button>
            ))
            }
            <button
                className="bg-zinc-200 py-1 px-2 rounded-sm disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={toNextPage}>
                    Próxima
            </button>
            <button
                className="bg-zinc-200 py-1 px-2 rounded-sm disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={toLastPage}>
                    Última
            </button>
        </div>
    )
}
interface PaginationProps {
    currentPage: any
    prevPage: any
    nextPage: any
    totalPages: any
    clickPage: any
}

export function Pagination({ currentPage, prevPage, nextPage, totalPages, clickPage}: PaginationProps) {

    const maxPages = 7

    const maxPagesLeft = 2

    const firstPage = Math.max(currentPage - maxPagesLeft, 1)

    return(
        <div className="flex justify-center items-center my-5 gap-3">
            <button
                className="bg-zinc-200 py-1 px-2 rounded-sm disabled:opacity-50"
                disabled={currentPage === 0}
                onClick={prevPage}>
                    Anterior
            </button>
            {Array.from({ length: Math.min(maxPages, totalPages) })
            .map((_,index) => currentPage <= totalPages - 4 ? (index - 1) + firstPage : (index - 1) + Math.max(totalPages - 6, 1))
            .map((page) => (
                <button
                    className={`${page === currentPage ? "bg-zinc-200" : ''} w-9 flex justify-center px-3 bg-white text-zinc-700 border border-zinc-300`}
                    value={page}
                    key={page}
                    onClick={clickPage}>{page + 1}
                </button>
            ))
            }
            <button
                className="bg-zinc-200 py-1 px-2 rounded-sm disabled:opacity-50"
                disabled={currentPage === totalPages - 1}
                onClick={nextPage}>
                    Próxima
            </button>
        </div>
    )
}
"use client"
import Link from "next/link"
import { useMemo } from "react"

type PaginationProps = {
    page: number
    totalPages: number
    baseUrl: string
    query?: Record<string, string | number | undefined>
}

const DOTS = '...'

const usePagination = ({ totalPages, page }: { totalPages: number, page: number }) => {
    const paginationRange = useMemo(() => {
        const siblingCount = 1
        const totalPageNumbers = siblingCount + 5

        if (totalPageNumbers >= totalPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

        const leftSiblingIndex = Math.max(page - siblingCount, 1)
        const rightSiblingIndex = Math.min(page + siblingCount, totalPages)

        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2

        const firstPageIndex = 1
        const lastPageIndex = totalPages

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
            return [...leftRange, DOTS, totalPages]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount
            const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1)
            return [firstPageIndex, DOTS, ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i)
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }

        return []
    }, [totalPages, page])

    return paginationRange
}

function buildHref(baseUrl: string, page: number, query?: Record<string, string | number | undefined>) {
    const params = new URLSearchParams()
    params.set('page', String(page))
    if (query) {
        for (const [k, v] of Object.entries(query)) {
            if (v !== undefined && v !== '') params.set(k, String(v))
        }
    }
    return `${baseUrl}?${params.toString()}`
}

export default function Pagination({page, totalPages, baseUrl, query} : PaginationProps ) {
    const paginationRange = usePagination({ totalPages, page })

    if (totalPages <= 1) return null

  return (
    <nav aria-label="Navegación de paginación" className="flex justify-center py-10 gap-2">
        {page > 1 && (
            <Link
                href={buildHref(baseUrl, page - 1, query)}
                aria-label={`Página anterior, ir a ${page - 1}`}
                className="bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >&laquo;</Link>
        )}

        {paginationRange.map((pageNumber, index) => (
            pageNumber === DOTS ? 
            <span key={`dots-${index}`} className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">...</span> :
            <Link key={pageNumber} href={buildHref(baseUrl, Number(pageNumber), query)} aria-label={`Ir a página ${pageNumber}`} className={`${page === pageNumber ? 'bg-amber-400 text-white font-bold' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'} px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700`} aria-current={page === pageNumber ? 'page' : undefined}>{pageNumber}</Link>
        ))}

        {page < totalPages && (
            <Link
                href={buildHref(baseUrl, page + 1, query)}
                aria-label={`Página siguiente, ir a ${page + 1}`}
                className="bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >&raquo;</Link>
        )}
    </nav>
  )
}

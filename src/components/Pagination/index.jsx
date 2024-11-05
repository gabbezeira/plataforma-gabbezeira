import { Container } from './styles'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const handleClick = (page) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page)
		}
	}

	return (
		<Container>
			<button
				className="page-button"
				onClick={() => handleClick(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft className="icon" />
			</button>
			{[...Array(totalPages)].map((_, index) => (
				<button
					className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
					key={index}
					onClick={() => handleClick(index + 1)}
				>
					{index + 1}
				</button>
			))}
			<button
				className="page-button"
				onClick={() => handleClick(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight className="icon" />
			</button>
		</Container>
	)
}

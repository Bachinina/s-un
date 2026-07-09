import type { FC } from "react"

interface IFilterButtonProps {
	title: string;
	onClick: () => void;
	disabled?: boolean;
}

export const FilterButton: FC<IFilterButtonProps> = ({
	title,
	onClick,
	disabled = false,
}) => {
	return (
		<button type="button" onClick={onClick} disabled={disabled}>
			{title}
		</button>
	)
}

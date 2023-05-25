export default function DateComponent({ dateString }) {
	const formattedDate = new Date(dateString);
	const listOfMonths = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const day = formattedDate.getDate();
	const month = listOfMonths[formattedDate.getMonth()];
	const year = formattedDate.getFullYear();
	return (
		<time dateTime={dateString}>
			{month} {day}, {year}
		</time>
	);
	// const date = parseISO(dateString);
	// return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

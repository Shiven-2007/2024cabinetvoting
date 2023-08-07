import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getData() {
	const allVotes = prisma.candidate.findMany();
	console.log(allVotes);
	return allVotes;
}
export default async function Page() {
	const data = await getData();

	return (
		<main>
			{data.map((element, index) => {
				return (
					<div id={index.toString()} key={index}>
						{element.candidateName}
						{element.houseName}
						{element.votes}
					</div>
				);
			})}
		</main>
	);
}

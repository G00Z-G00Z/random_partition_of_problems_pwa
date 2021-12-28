import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../data/dexieDatabase";
import { createTeamSeeds } from "../../seeds/teamSeeds";
import { Team } from "../../types/interfaces";
import { TeamDisplay } from "./TeamDisplay";

interface Props {
	teams: Team[];
}

export const SelectTeamPage: FC<Props> = React.memo(({ teams }) => {
	const [query, setQuery] = useState("");

	const navigate = useNavigate();

	const handleNavigation = (id?: string) => {
		navigate(`/team/edit/${id ?? "new"}`);
	};

	return (
		<div>
			<h1 className="w-full text-5xl font-serif text-center">Select a Team</h1>
			<button
				className="block text-4xl p-2 text-gray-10 bg-slate-500"
				onClick={() => {
					createTeamSeeds(db, {
						teams: 10,
						maxPersonsPerTeam: 4,
					});
				}}
			>
				Make new Seeds
			</button>
			<input
				type="text"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<section>
				<button
					className="text-gray-80 border-dashed border-2 border-gray-80 p-8 bg-gray-20 w-full text-2xl font-bold hover:bg-gray-30 focus:bg-red-50"
					onClick={(e) => handleNavigation()}
				>
					Add new team
				</button>
			</section>
			<section>
				{teams.map((t, idx) => (
					<div>
						<TeamDisplay team={t} key={idx} />
						<button
							className="text-danger-100 bg-danger-400"
							onClick={() => {
								db.deleteTeam(t.id ?? 0);
							}}
						>
							Borrame
						</button>
					</div>
				))}
			</section>
		</div>
	);
});

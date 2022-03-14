import ape1 from "../assets/a1.jpg";
import ape2 from "../assets/a2.png";
import ape3 from "../assets/a3.jpg";

const teamList = [
  {
    id: 1,
    img: ape1,
    name: "Niros",
    position: "Creative Mind",
  },
  {
    id: 2,
    img: ape2,
    name: "Marta Clermont",
    position: "Design Team Lead",
  },
  {
    id: 3,
    img: ape3,
    name: "Alice Melbourne",
    position: "Human Resources",
  },
];

export const Team = () => {
  return (
    <div id="team" className="bg-slate-900">
      <div className="px-5 sm:px-12 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div className="mb-10 text-center">
          <h1 className="font-bold tracking-wide text-white text-3xl sm:text-4xl text-center">
            THE TEAM
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {teamList.map((team) => (
              <div key={team.id} className="team-glass p-3">
                <img
                  src={team.img}
                  alt="avatar ape"
                  className="object-fill rounded-lg"
                />
                <h1 className="text-2xl font-semibold text-white mt-5">
                  {team.name}
                </h1>
                <p className="font-light text-white text-sm my-3">
                  {team.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

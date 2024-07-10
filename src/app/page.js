import Hero from "@/sections/Hero";
import Team from "@/components/Team";
import TeamData from "@/components/TeamData";
import TeamBase from "@/components/TeamBase";
import OurTeam from "@/components/OurTeam";

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <Team />
      <TeamData />
      <TeamBase />
      <OurTeam />
    </div>
  );
}
